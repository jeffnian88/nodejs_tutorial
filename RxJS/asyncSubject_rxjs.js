var subject = new Rx.AsyncSubject();

var i = 0;
var handle = setInterval(function () {
    subject.onNext(i);
    if (++i > 3) {
        subject.onCompleted();
        clearInterval(handle);
    }
}, 500);

var subscription = subject.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

// => Next: 3
// => Completed