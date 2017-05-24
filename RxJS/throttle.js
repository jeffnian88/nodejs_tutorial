var Rx = require('rxjs/Rx');
var times = [
    { value: 0, time: 100 },
    // { value: 1, time: 600 },
    // { value: 2, time: 400 },
    // { value: 3, time: 900 },
    { value: 4, time: 200 }
];

// Delay each item by time and project value;
var source = Rx.Observable.from(times)
    .mergeMap(function (item) {
        return Rx.Observable
            .of(item.value)
            .delay(item.time);
    });

var indexedSource = source
    .scan((_, value, index) => {
        // console.log(`value = ${value}, index = ${index}`)
        return [value, index];
    }, undefined)
    .share();

var indexedThrottled = indexedSource
    .throttleTime(300 /* ms */);

var throttled = indexedThrottled
    .map(value => value[0]);

var notThrottled = Rx.Observable.combineLatest(indexedThrottled, indexedSource)
    .filter(combined => {
        var filteredIndex = combined[0][1];
        var sourceIndex = combined[1][1];

        return sourceIndex > filteredIndex ? true : false;
    })
    .map(combined => {
        return combined[1][0];
    });

source.subscribe(value => console.log(`source : ${value}`));
throttled.subscribe(value => console.log(`++++++ : ${value}`));
notThrottled.subscribe(value => console.log(`------ : ${value}`));