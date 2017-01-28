var Rx = require('rxjs/Rx');
const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const source = Rx.Observable
.interval(1000)
.take(6)
.map(i => data[i]);

const result = source;

result.subscribe(x => console.log(x));