var Rx = require('rxjs/Rx');

var source = Rx.Observable.timer(0, 1000).
//buffer(function () { return Rx.Observable.timer(1000); }).
take(3);// timer(firstValueDelay, intervalBetweenValues)

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

/*
var source = Rx.Observable.timer(0, 50)
  .buffer(function () { return Rx.Observable.timer(125); })
  .take(3);

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });
  */