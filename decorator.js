function makeDoubleDecorator(f)
{
	console.log("make decorator:",Array.prototype.slice.call(arguments));
  return function(a,b) {
  	console.log("In Decorator:",a,b);
	console.log("In Decorator::",Array.prototype.slice.call(arguments));
	if(a+b > 10) return "Error";
	obj = {a:"11",b:"22"};

	var nextArguments = Array.prototype.slice.call(arguments);
	nextArguments.push(obj);
    return f.apply(this, nextArguments);
  }
}
function sum(a,b,obj)
{
	console.log("In sum");
	console.log("obj:",obj);
	console.log("a:",a);
	console.log("b:",b);
	return a+b;
}

var func = makeDoubleDecorator(sum);
console.log(func(1,2));
console.log(func(15,2));//Error