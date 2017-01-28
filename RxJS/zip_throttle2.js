var request = require('request');
var Rx = require('rxjs/Rx');
var eventEmitter = new events.EventEmitter();

const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const source1 = Rx.Observable
.interval(1000);
function timerhandler(subscriber) {
  console.log("request() was invoked!!");
  request({
    url: 'http://beta.json-generator.com/api/json/get/Ey8JqwIh', json: true
  }, function (err, res, json) {
    if (err) {
      //reject(err);
    } else {
        subscriber.next(json);
    }
  });
}
var gsubscriber;
function getArticleObservableStream() {
  return Rx.Observable.create(function (subscriber) {
    gsubscriber = subscriber;
    eventEmitter.on('doorOpen', timerhandler, subscriber);  
  });
};
const source2 = getArticleObservableStream();
var zipsource = Rx.Observable.zip(source1,source2);


zipsource.subscribe(function(x) { setTimeout(timerhandler,0,gsubscriber);console.log(x);});