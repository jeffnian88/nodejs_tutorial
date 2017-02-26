var Rx = require('rxjs/Rx');

var source = Rx.Observable.timer(0, 1000)
.do(()=>console.log("Timer Fired!!"))
//buffer(function () { return Rx.Observable.timer(1000); }).
.take(4);
.share();// timer(firstValueDelay, intervalBetweenValues)

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
var subscription1 = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });