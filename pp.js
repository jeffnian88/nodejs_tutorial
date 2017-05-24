function test(...array){
  console.log(array);
  array.forEach((each, i)=>{
    //console.log(each);
    each(i, 'test');
  });
}

test((num, str)=>{console.log(num, str)});