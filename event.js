var events = require('events');
var eventEmitter = new events.EventEmitter();
 
function ringBell(msg)
{
  console.log('ring ring ring : ' + msg);
}
eventEmitter.on('doorOpen', ringBell);


setTimeout(cb, 1000, 0);
function cb(i)
{
	eventEmitter.emit('doorOpen', 'hello_world ' + i);
	setTimeout(cb, 1000, i+1);
}