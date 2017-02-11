var events = require('events');
var eventEmitter = new events.EventEmitter();
 
function ringBell(msg,cb)
{
  console.log('ringBell:'+msg);
  cb(200);
}
eventEmitter.on('doorOpen', ringBell);



eventEmitter.emit('doorOpen', 'hello_world', function(data){

  console.log('we got val:'+ data);
});