var rocky=
{
	printname:function() {
			console.log("My name is rocky:");
  		console.log(this===rocky);
	}
};
rocky.printname();
var mike=function(){
	console.log("My name is mike:");
	console.log(this===global);
};
mike();
function printname(){

  console.log("In Global:");
  console.log(this==global);
}
printname();