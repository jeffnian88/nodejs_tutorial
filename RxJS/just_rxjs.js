var Rx = require('rxjs/Rx');
var cached = {};
var source = Rx.Observable.of(cached[1]);

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
