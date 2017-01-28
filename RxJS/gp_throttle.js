var request = require('request');
var Rx = require('rxjs/Rx');
var genericPool = require('generic-pool');

const factory = {
    create: function(){
         return new Promise(function(resolve, reject){
          /*
            var client = DbDriver.createClient()
            client.on('connected', function(){
                resolve(client)
            })
            */
            resolve();
        });
    },
    destroy: function(client){
        return new Promise(function(resolve){
          resolve();
          /*
          client.on('end', function(){
            resolve()
          })
          client.disconnect()
          */
        });
    }
};
var opts = {
    max: 2, // maximum size of the pool 
    min: 1 // minimum size of the pool 
};
var myPool = genericPool.createPool(factory, opts);


var gsubscriber;
function getArticleObservableStream(id) {
  //const resourcePromise = myPool.acquire();
  return Rx.Observable.create(function (subscriber) {
    myPool.acquire().then(function() {
      console.log("request() was invoked!!", id);
      request({
        url: 'http://beta.json-generator.com/api/json/get/Ey8JqwIh', json: true
      }, function (err, res, json) {
        myPool.destroy();
        if (err) {
          //reject(err);
        } else {
            subscriber.next(json);
        }
      });

    }).catch(function(err){
      console.log("err", err);
      // handle error - this is generally a timeout or maxWaitingClients  
      // error 
    });
  });
}
for(var i=0;i<5;i++){
  getArticleObservableStream(i).subscribe(function(x) { console.log(x);});
}
myPool.drain().then(function() {
    myPool.clear();
});




