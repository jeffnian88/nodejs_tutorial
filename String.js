var a = "aa";
String.prototype.rev = function(){
  console.log(this+"_rev_"+this.length);
};
console.log("a");
a.rev();