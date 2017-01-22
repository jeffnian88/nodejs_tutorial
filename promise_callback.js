//error handlers is hard
function asyncFunc1(callback) {
  setTimeout(callback, 1000, "qoo1");
}
asyncFunc1(function(var1){

  console.log("use callback to get the result from asyncFunc1 =>", var1);
});


//Promises are an alternative to callbacks for delivering the results of an asynchronous computation.
//Promise provie good error handling
//Promise is a container for an asynchronously delivered value

var Promise = require('promise');
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, "foo");
});
var p4 = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(para * para)
        }, 1000)
    })
};
var p5 = await p4(5);
console.log("p3:", p3);
//Executing asynchronous functions in parallel
Promise.all([p1, p2, p3]).then(function(values) {
  //console.log("p3:", p3);
  console.log(values);
  console.log("values[0]:", values[0]);
  console.log("values[1]:", values[1]);
  console.log("values[2]:", values[2]);
 // [3, 1337, "foo"] 
  console.log("p1:", p1._65);
  console.log("p3:", p3._65);
});


function asyncFunc() {
    return new Promise(
        function (resolve, reject) {
			setTimeout(resolve, 1000, "qoo");
        });
}
asyncFunc().then(function(result) { console.log("result:", result);});


var readFile = Promise.denodeify(require('fs').readFile);
function readJSON(filename){
  return readFile(filename, 'utf8').then(JSON.parse);
}
var aa = readJSON('test.json').then(function(res){console.log("res:", res);});



