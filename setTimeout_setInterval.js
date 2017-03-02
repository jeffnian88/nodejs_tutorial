// var myObj = [{ foo: "goodbye1" },{ foo: "goodbye2" },{ foo: "goodbye3" }];
// var QQQ = "123";
// var obj = {foo:"..."};
// var cb = function(obj)
// {
// 	console.log(QQQ);
//   console.log(obj);
//   obj.foo = "QQ";
// 	console.log(myObj);

// };
// for(var i=0;i<3;i++)
// {
//   // FIFO
//   setTimeout(cb, 100, myObj[i]);
// }

// function make_closure(msg)
// {
// 	return function(n) {
//     console.log("para var:", n);
//     console.log("clousre var:", msg);
// 	}
// }

// for(i=0;i<5;i++){
//   func1 = make_closure(i);
//   setTimeout(func1, 0, "para"+i);
// }

// for(i=0;i<5;i++) {
//   setTimeout((n)=>{console.log("arrow function with para var:", n);}, 0, i);
// }




// for (var i = 1; i <= 5; i++) {
//     setTimeout(function(x) { return function() { console.log("QOO:",x); }; }(i), 1000*i);
//     // 1 2 3 4 5
// }
// setInterval();
// //#3f51b5
function aaa(ccc)
{
  console.log("AAA:", ccc);
}
setTimeout(aaa, 4000, 123);

console.log("BBB:");
