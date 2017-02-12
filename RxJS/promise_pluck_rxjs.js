var Rx = require('rxjs/Rx');
var rp = require('request-promise');

var requestStream = Rx.Observable.of('https://api.github.com/users/jeffnian88');

var responseStream = requestStream
  .flatMap(function(requestUrl) {
    var options = {
      uri: requestUrl,
      qs: {
          //access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
      },
      headers: {
          'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response 
    };

    return Rx.Observable.fromPromise(rp(options));
  }).pluck('id');

responseStream.subscribe(function(response) {
  // render `response` to the DOM however you wish
  console.log("res:", response);
});