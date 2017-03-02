var proto = {
  hello: function () { 
    console.log(this);
    console.log("My name is ", this.name);
  },
  hello1: () => { 
    console.log(this);
    console.log("My name is ", this.name);
  },
  hello2: function() {
    return function(){
      console.log(this);
      console.log("My name is ", this.name);
    };
  }

};
var john = Object.create(proto);
john.name = "John";
john.hello();
john.hello1.call(john);
