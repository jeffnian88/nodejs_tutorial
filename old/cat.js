function bow()
{
	console.log("Meow, my age is "+ this.age);
}

// object factory
module.exports = function () {
	return {
		age:0,
		bow:bow
	}
};
// global method
module.exports.meow = bow;