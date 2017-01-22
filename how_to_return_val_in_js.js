//how_to_return_val_in_js
var Promise = require('promise');

function asyncFunc() {
  return new Promise(
    function (resolve, reject) {
      setTimeout(resolve, 1000, "return_value_1");
    });
}
asyncFunc().then(function(result) { console.log("result:", result);});


function asyncFunc1(callback){
  setTimeout(callback, 1000, "return_value_2");
}

asyncFunc1(function(result){
  console.log("result:", result);
});