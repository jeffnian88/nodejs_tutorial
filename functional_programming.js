var numbers = [1, 2, 3, 4];
var doubles = numbers.map(function(num) {
  return num * 2;
});
var filtereddoubles = doubles.filter(function(num) {
  return num>5;
})

var totalNumber = filtereddoubles.reduce(function(total, num){
    return total + num;
}, 0);
console.log("doubles:", doubles);
console.log("filtereddoubles:", filtereddoubles);
console.log("totalNumber:", totalNumber);