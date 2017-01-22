var events = require('events');
var eventEmitter = new events.EventEmitter();
 
function ringBell(msg,cb)
{
  console.log('ring ring ring:'+msg);
  cb(200);
}
eventEmitter.on('doorOpen', ringBell);
function callback(val)
{
  return val;
}
eventEmitter.emit('doorOpen', 'hello_world', function(data){

  console.log('we got val:'+ data);
});




function closure_deco() {
	// th following variable is like static var
	var cached = {};
	return function(i) {
		if(i in cached) {
			console.log("cached hit");
			return cached[i];
		}
		console.log("cached miss");

		cached[i] = i*i;

		return cached[i];
	}
}

func = closure_deco();
console.log(func(1));
console.log(func(1));
console.log(func(1));
console.log(func(2));
console.log(func(2));
console.log(func(2));
