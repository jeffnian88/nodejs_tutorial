var map = {};
console.log(Object.keys(map).length);
map["11"] = 1;
map["22"] = 2;
map["33"] = 3;
console.log(Object.keys(map).length);

for (var key in map) {
    console.log(map[key]);
}

//Map

var myMap = new Map();
myMap.set("bar", "foo");
console.log("has:", myMap.has("bar"),"get:", myMap.get("bar"));
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
console.log("myMap.size", myMap.size);
console.log(myMap.get("bar"));  // Returns "foo".
console.log(myMap.get("baz"));  // Returns undefined.

myMap.forEach(function(v, k){console.log("v:", v, "k:", k);});

//Set

var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o is referencing a different object so this is okay

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed

mySet.size; // 4, we just removed one value
mySet.forEach(function(e){console.log("e:", e);});
