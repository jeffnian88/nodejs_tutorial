var jp = require('jsonpath');
var cities = [
  { name: "London", "population": 8615246 },
  { name: "Berlin", "population": 3517424 },
  { name: "Madrid", "population": 3165235 },
  { name: "Rome",   "population": 2870528 }
];
let aa = jp.value(cities, '$.0');
cities[0].name = 'qq';
console.log(aa);
//aa= 'ss';

console.log(JSON.stringify(cities));

console.log(cities[0]===aa);

let queryIDMap = {};
for(let i=0;i<10;i++){
while ((queryID = Date.now()) in queryIDMap) { }
}
queryIDMap[queryID] = true;


let queryID, i=0 ; while ((queryID = Date.now()+i) in queryIDMap) { i++; } queryIDMap[queryID] = true;