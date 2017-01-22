var cat=require("./cat");
var mike_cat = cat();
var mary_cat = cat();
mike_cat.age = 11;
mary_cat.age = 13;
mike_cat.bow();
mary_cat.bow();

cat.meow();
