function getval(...qq)
{
  console.log(qq);
  console.log(qq.pop());
  console.log(qq);
  return 123;
}
getval([1,2,3,4], 1);

/*function wahaha(){
  val = getval();
  console.log("val:", val);
	console.log(arguments.callee.name);
	console.log("hihi");
}
wahaha();*/