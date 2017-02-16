var title = "hi";
var body = "hi,body";

var jsondata1 = {title:"Hello World"};
console.log(jsondata1);

var {title} = jsondata1;
console.log(title);


var jsondata2  = {title,body};
console.log(jsondata2);


var obj1 = {name:"Jerry", gender:"Male"};
var obj2 = Object.assign({}, obj1);
console.log("obj2:", obj2);
console.log("obj1===obj2", obj1===obj2);

var obj3 = {name:"Frank", money:100};

var obj4 = Object.assign(obj3, obj1);

console.log("obj3:", obj3);
console.log("obj4:", obj4);
console.log("obj3===obj4", obj3===obj4);

obj3.money = 10;
console.log("obj3:", obj3);
console.log("obj4:", obj4);

var obj5 = {name:"AAA"};
var obj6 = {name:"BBB", gender:"Male"};
var obj7 = Object.assign({}, obj5, obj6);
console.log("obj5:", obj5);
console.log("obj6:", obj6);
console.log("obj7:", obj7);
