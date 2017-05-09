var p1 = () => new Promise((resolve, reject) => resolve(1));
var p2 = () => new Promise((resolve, reject) => resolve(2));
var p3 = () => new Promise((resolve, reject) => reject(3));

p1()
.then((v1) => {console.log("v1:", v1); return p2();})
.then((v2) => {console.log("v2:", v2); return p3();})
.catch(error => {console.log("error:", error);})

Promise.all([
    p1(),
    p2(),
]).then(([result1, result2]) => {
  console.log("[result]:",result1,result2);
});


Promise.all([
    p1(),
    p2(),
    p3()
]).then(([result1, result2]) => {
  console.log("[result]:",result1,result2);
}).catch(error => {console.log("error:", error);})

var add1 = (n) => new Promise((resolve, reject) => resolve(n+1));
add1(1)
.then(n=>add1(n))
.then(n=>add1(n))
.then(n=>console.log("n:",n));

var add1 = (n) => new Promise((resolve, reject) => resolve(n+1));
add1(1)
.then(function(n){return add1(n)})
.then(n=>add1(n))
.then(n=>console.log("n:",n));