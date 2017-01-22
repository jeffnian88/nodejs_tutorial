var Rx = require('rxjs/Rx');
/* Use max concurrency */
var source = Rx.Observable.range(0, 3)
    .map(function (x) { return Rx.Observable.range(x, 3); })
    .merge(2);

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ', x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });