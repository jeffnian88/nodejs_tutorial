arr = ["item1", "item2", "item3", "item4"];
console.log(arr.length);
arr.forEach(function(item, index) {
  console.log("forEach index:", index, ", item:",item);
  return 11;//didn't return
});
arr.some(function(item, index) {
  console.log("some index:", index, ", item:",item);
  if(index>1)
    return true;
  //it will continue if return false, default if false
});
arr.every(function(item, index) {
  console.log("every index:", index, ", item:",item);
  //it will continue if return true, default if false
  return true;
});





val = arr.find((each)=>{return each=="item1"});
console.log("val:",val);
console.log("indexOf:", arr.indexOf("item1"));
console.log("findIndex:", arr.findIndex((each)=>{return each=="item1"}));

arr1 = [{_id:"11", p:100},{_id:"22",p:22}];
console.log("arr1:",arr1);
index = arr1.findIndex((item)=>{return item._id=="22";});
console.log("findIndex:", index);
arr1.splice(index,1);
//delete arr1[index];
console.log("arr1:",arr1);
console.log("find:",arr1.find((each)=>{return each._id=="11"}));
