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
function p4(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(para+1);
        }, para);
    });
}

(async function() {
  //Await Sequentially
  var p5 = await p4(2000);
  console.log("p5:", p5);
  var p5 = await p4(1000);
  console.log("p5:", p5);

})();

async function test() {
  //Await Parallelly
  var results = await Promise.all([p4(1000), p4(2000)]);
  console.log("results:", results);
};
test();

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
