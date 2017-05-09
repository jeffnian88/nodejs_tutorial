var AA = null;
var BB = '11';
var DD = "";
console.log("typeof CC === 'undefined'", typeof CC === 'undefined');
console.log("typeof AA", typeof AA);
console.log("AA === null", AA === null);
console.log("typeof BB", typeof BB);
console.log("BB === '11'", BB === '11');
console.log("BB == '11'", BB == '11');
console.log("BB === 11", BB === 11);
console.log("BB == 11", BB == 11);
if(AA) {
  console.log("AA");
}
if(BB) {
  console.log("BB");
}
if(CC) {
  console.log("CC");
}
if(DD) {
  console.log("DD");
}