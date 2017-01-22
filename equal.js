var a=1;
var b='1';
var d=a;
var e=1;

console.log(a==b);//true, == will eval value
console.log(a===b);//false, == will not eval value

var c='19';
console.log(19==c);//true, == will eval value
console.log(19===c);//false,  19 is not reference of '19'

console.log(19=='19');//true, == will eval value
console.log(19==='19');//false, 19 is not reference of '19'
console.log('19'==='19');//false, 19 is not reference of '19'

console.log('\n');

console.log(a==d);//false, == will eval value
console.log(a===d);//false, == will not eval value

console.log(a==e);//false, == will eval value
console.log(a===e);//false, == will not eval value
