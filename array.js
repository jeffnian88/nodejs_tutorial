arr = ["item1", "item2", "item3", "item4"];
console.log(Object.prototype.toString.call(arr));
console.log(arr.length);
var ret;
ret = arr.forEach(function(item, index) {
  console.log("[forEach] index:", index, ", item:",item);
  return 11;//didn't return
});
console.log("ret:", ret);
ret = arr.map(function(item, index) {
  console.log("[map] index:", index, ", item:",item);
  return item+"_999";
});
console.log("ret:", ret);

ret = arr.some(function(item, index) {
  console.log("[some] index:", index, ", item:",item);
  if(index>1)
    return true;
  //it will continue if return false, default if false
});
console.log("ret:", ret);

ret = arr.every(function(item, index) {
  console.log("[every] index:", index, ", item:",item);
  //it will continue if return true, default if false
  return true;
});
console.log("ret:", ret);


console.log("[indexOf]", arr.indexOf("item2"));
console.log("[find]", arr.find((each)=>each==="item1"));
console.log("[findIndex]", arr.findIndex((each)=>{return each==="item2"}));

arr1 = [{_id:"11", p:100},{_id:"22",p:22}, ,{_id:"33",p:33}];
console.log("arr1:[find]:", arr1.find((each)=>{return each._id=="11"}));
console.log("arr1:[findIndex]", arr1.findIndex((item)=>{return item._id=="22";}));

//delete index=1
arr1.splice(1,1);
console.log("arr1:[splice]",arr1);



function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

