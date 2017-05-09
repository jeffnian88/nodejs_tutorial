function asyncFunc() {
      return new Promise(
        function (resolve, reject) {
			setTimeout(resolve, 1000, "qoo");
        });
}
asyncFunc().then(function(result) { console.log("result:", result);}).catch(error=>{
  console.log("err:", error);
});

let aMap={'aa':11, 'bb':22};
for(let key in aMap){
  console.log("key:", key);
}
console.log("key:", Object.keys(aMap));