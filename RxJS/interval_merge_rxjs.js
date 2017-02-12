var Rx = require('rxjs/Rx');
const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const source1 = Rx.Observable.interval(2000);
const source2 = Rx.Observable.interval(500);
const source = Rx.Observable.merge(source1,source2);
var result = source.take(6).map(i => data[i]);


//source.subscribe(x => console.log(x));
result.subscribe(x => console.log(x));
