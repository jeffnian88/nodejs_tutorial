//var Rx = require('rxjs/Rx');
//var request = require('request');
var socket = require('socket.io-client')('http://localhost:8080');
socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});


socket.on('message', function (data) {
  console.log("get data from server:", data);
});