var Rx = require('rxjs/Rx');
var ObserableMap = new Map();
function getObserable(id) {
    if(ObserableMap.has(id)) {
      return ObserableMap.get(id);
    }
    var memoryobserable = Rx.Observable.create(function(subscriber) {
        console.log("[Memory Observable]");
        if (typeof data_in_cached !== "undefined") {
            console.log("Hit");
            subscriber.next("Memory")
        } else {
            console.log("Miss");
            subscriber.complete();
        }
    });
    var diskobserable = Rx.Observable.create(function(subscriber) {
        console.log("[Disk Observable]");
        // Try to make a query [select * from user_table where id=userid]
        if (typeof data_in_disk !== "undefined") {
            console.log("Hit");
            //TODO here: copy data from Sqlite into Memory
            subscriber.next("Disk")
        } else {
            console.log("Miss");
            subscriber.complete();
        }
    });
    var networkobserable = Rx.Observable.create(function(subscriber) {
        console.log("[Network Observable]");
        // Try to make a query http.get()
        if (typeof data_in_network !== "undefined") {
            console.log("Hit");
            //TODO here: copy data from Network into DB and Memory.
            subscriber.next("Network")
        } else {
            console.log("Miss");
            subscriber.complete()
        }
    });
    var data_in_network = "Hello";
    var obserable = Rx.Observable.concat(memoryobserable, diskobserable, networkobserable).first();
    
    // var subject = new Rx.Subject();
    // obserable.subscribe(subject); // 你可以透過Subject來訂閱observable
    ObserableMap.set(id,obserable);
    return obserable;
}

var subscription = getObserable(1).subscribe(
  function (x) {
    console.log('Found data in %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });