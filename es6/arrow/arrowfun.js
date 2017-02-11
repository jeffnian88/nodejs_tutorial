let add1 = x => y => x + y;
//Here is the same code1 without arrow functions …

let add2 = function (x) {
  return function (y) {
    return x + y;
  };
};
var f1 = add1(10);
var f2 = add2(100);
console.log(f1(1))
console.log(f2(2));
//console.log(add2(2,3)());