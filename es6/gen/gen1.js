function *get_counter(){
	var i = 1,j=-1;
	setTimeout(function *qq(){ yield 100; }, 3000);
	while(true){
		yield i;
		yield j;
		i++;
		j--;
	}
}
var counter = get_counter();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
