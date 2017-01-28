var Rx = require('rxjs/Rx');
const array = ['A', 'B', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

var mySet = new Set();
var source = Rx.Observable.from(array)
    .filter(function (x) { if(mySet.has(x)) return false; else{mySet.add(x);return true;} });
    //.takeWhile(function (x) { if(mySet.has(x)) return false; else{mySet.add(x);return true;} });

var subscription = source.subscribe(
    function (x) { console.log('Next: ' + x); },
    function (err) { console.log('Error: ' + err); },
    function () { console.log('Completed'); });