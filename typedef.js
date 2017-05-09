// Numbers
var val = 1;
console.log(typeof val === 'number');

console.log(typeof 37 === 'number');
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 雖然是 "Not-A-Number"
typeof Number(1) === 'number'; // 但是不要使用這種方式!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof 一律會傳回一個字串
typeof String("abc") === 'string'; // 但是不要使用這種方式!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 但是不要使用這種方式!

// Undefined
typeof undefined === 'undefined';
typeof blabla === 'undefined'; // 一個 undefined 變數

// Objects
typeof {a:1} === 'object';
typeof [1, 2, 4] === 'object'; // 請使用 Array.isArray 或者 Object.prototype.toString.call 以區分正規運算式和陣列
typeof new Date() === 'object';

console.log("1:",typeof blabla === 'undefined');
console.log("2:",Array.isArray({}));