var a = "aa";
var b = new String("bb");
String.prototype.rev = function(){
  console.log(this+"_rev_"+this.length);
};
a.rev();
b.rev();


User.prototype.globalgoal = "Create a new web.";

function User()
{
	this.name = "";
	this.age = 10;
	this.sayHello = function(){
		console.log(this.name+" say Hello!, my age is " + this.age);
		console.log("Our global goal is " + this.globalgoal);
    console.log("\n");
	}

}

var mike = new User();
var mary = new User();
mike.name="mike";
mike.age=12;
mary.name="mary";
mike.sayHello();
mary.sayHello();
User.prototype.sayHi = function() {
	console.log(this.name+" say Hi!, my age is "+this.age);
	console.log("Our global goal is " + this.globalgoal);
  console.log("\n");
};
mike.sayHi();
mary.sayHi();

//User.prototype.sayHello(); // User.prototype.sayHello is not a function
User.prototype.sayHi();

console.log(User.prototype === Object.getPrototypeOf(mike)); //it should be true

console.log(mike.globalgoal);
console.log(mary.globalgoal);
console.log(User.globalgoal);


function test(){
  return (<app> <app>);
}
test();

