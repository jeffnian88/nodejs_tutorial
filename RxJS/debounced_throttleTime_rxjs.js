var Rx = require('rxjs/Rx');
var source = Rx.Observable.interval(100);


var subscription =
  source
  .throttleTime(500)
  //.debounce(function(obj) {return Rx.Observable.timer(500);})
  .subscribe(
    function (x) { console.log('Next: ' + x); },
    function (err) { console.log('Error: ' + err); },
    function () { console.log('Completed'); });