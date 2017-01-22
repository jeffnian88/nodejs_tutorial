/*
// Creates an observable sequence of 5 integers
var source = Rx.Observable.range(1, 5);

// catch every status and print out value
var subscription = source.filter(function (x) {
      return x>2;
  }).subscribe(
x => console.log('onNext: ' + x),

e => console.log('onError: ' + e.message),

() => console.log('onCompleted'));
*/