



// Cached
function closure_deco() {
	// the clousre variable is kind of like static var
	var square_cached = {};
	return function(i) {
		if(i in square_cached) {
			console.log("square_cached hit.");
			return square_cached[i];
		}
		console.log("square_cached miss.");

		square_cached[i] = i*i;

		return square_cached[i];
	}
}

squarefunc = closure_deco();
console.log(squarefunc(1));
console.log(squarefunc(1));
console.log(squarefunc(1));
console.log(squarefunc(2));
console.log(squarefunc(2));
console.log(squarefunc(2));


var global_i = 0;
function create_closure(closure_ii){
  var closure_i = 0;
  console.log("create");
  return function (){
    var local_i = 0;
    local_i++;
    global_i++;
    closure_i++;
    closure_ii++;

    console.log("local_i:",local_i);
    console.log("global_i:",global_i);
    console.log("closure_i:",closure_i);
    console.log("closure_ii:",closure_ii);

  };
 }

var func1 = create_closure(0);
func1();
func1();
func1();

var func2 = create_closure(0);
func2();
 //console.log("outside:closure_i:", closure_i);
