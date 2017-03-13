
var _ = require("lodash");
let a = {abc:{c:"123"}};
let b = {abc:{c:"123"}};
console.log(a==b);
console.log(_.isEqual(a, b));