var http = require('http');
var request = require('request');


http.createServer(function (req, res) {
    console.log("req:", req);
    request('https://www.linkedin.com/uas/login', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body); // Show the HTML for the Google homepage. 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(body);
        }
    });
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');

