var optionModel = function(name){
  var self = this;
  self.name = name;
  self.value = name;
}


console.log(new optionModel("test"));
console.log({name:"test", value:"test"});