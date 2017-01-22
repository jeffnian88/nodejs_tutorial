function *get_adder(){
  var total = 0;
  function *cb(){
  	yield 10;
  }
  setTimeout((cb)=>{cb("hi");}, 1000);
  while(true){
    console.log("before yield");
    total+=yield total;
    console.log("after yield, total:"+total);
  }
}

var adder = get_adder();
console.log(adder.next(1).value);
/*
before yield
0
*/
console.log(adder.next(100).value);
/*
after yield, total:100
before yield
100
*/