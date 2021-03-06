var Rx = require('rxjs/Rx');
var times = [
    { value: '11', time: 100 },
    { value: '12', time: 200 },
    { value: '13', time: 300 },
    { value: '11', time: 400 },
    { value: '12', time: 500 },
    { value: '13', time: 600 },
    { value: '14', time: 800 },
    { value: '15', time: 1500 }
];

// Delay each item by time and project value;
var source = Rx.Observable.from(times)
  .flatMap(function (item) {
    return Rx.Observable
      .of(item.value)
      .delay(item.time);
  })
  //.do(obj => console.log('stream 1:', obj, 'at', Date.now() - startTime, `ms`))
  .groupBy(obj => obj)
  .flatMap(group => group.throttleTime(500))
  
let startTime = Date.now();
var subscription = source.subscribe(
  function (x) {
    console.log('stream 2: %s', x, 'at', Date.now() - startTime, 'ms');
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });