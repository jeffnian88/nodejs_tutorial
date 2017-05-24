    var Rx = require('rxjs/Rx');
    var times = [
      { value: 0, time: 100 },
      { value: 1, time: 600 },
      { value: 2, time: 400 },
      { value: 3, time: 900 },
      { value: 4, time: 200 }
    ];
    
    // Delay each item by time and project value;
    var source = Rx.Observable.from(times)
      .flatMap(function (item) {
        return Rx.Observable
          .of(item.value)
          .delay(item.time);
      })
      .throttleTime(300 /* ms */);
    
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
