function *gen(){
  var arr = [];
  while(true){
  	console.log("before yield", arr);
    arr.push(yield arr);
    console.log("after yield", arr);
  }
}

var name = gen();
// get yield
console.log(name.next('init1').value);//[]


// put someething into yield and get next yield
console.log(name.next('nick').value);//["nick"]

//console.log(name.next('peter').value);//["nick","peter"]