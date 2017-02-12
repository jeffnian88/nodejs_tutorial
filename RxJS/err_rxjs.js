
var Rx = require('rxjs/Rx');
let l = console.log;
let o = Rx.Observable.create(observer =>{

  observer.next("1");
  observer.error("something wrong!");
  observer.complete("Done!");

});

o.subscribe({
  next:v => l(v),
  error:err => l(err),
  complete: v => l("complete!", v)
});