function letTest() {
  var foo = false;
  if(true) {
    //var foo = true;
    let foo = true;
    console.log(foo);
  }
  console.log(foo);

}

letTest();