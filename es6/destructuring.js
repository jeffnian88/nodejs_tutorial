//Object destructuring
let jsondata = {a:"test1", b:"test2"};

let {a,b,c} = jsondata;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

let testobj = {b:{aa:1111, bb:222}};
let {aa,bb} = testobj.b?testobj.b:{};
console.log(aa, bb);

//let qoo = {({a,b}=jsondata)};
//console.log(qoo);
//console.log(...jsondata);

let intarr = [1,2,3];
let [a1,a2,a3] = intarr;
console.log(a1,a2,a3);
//Assigning to new variable names
var o = {p: 42, q: true};
var {p: newfoo, q: newbar} = o;
 
console.log(newfoo); // 42 
console.log(newbar); // true  


[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log("a:", a);
console.log("b:", b);
console.log("rest:", rest);


let cc = ({b, a} = {a: 10, b: 20});
let cc1 = ({b, a} = jsondata);
console.log(a); // 10
console.log(b); // 20
console.log("cc:",cc); // 20
console.log("cc1:",cc1); // 20

//let jsondata1 = {...jsondata, a:"test3"};
//console.log(jsondata1);

//Array destructuring
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

//Default values
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

//Parsing an array returned from a function
function f() {
  return [1, 2];
}


a, b; 
[a, b] = f(); 
console.log("a:", a); // 1
console.log("b:", b); // 2


let arr1 = ['a', 'b'];
let arr2 = ['c', 'd'];

arr1.push(...arr2);
console.log("arr1:", arr1); // 1
console.log("arr2:", arr2); // 2
