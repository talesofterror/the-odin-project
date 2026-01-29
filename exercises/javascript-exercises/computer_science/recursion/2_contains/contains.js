const contains = function(o, v) {
	for (let i in o) {
		console.log(o[i])
		console.log(o[i] == v)
		console.log(o[i] === v)
		if (o[i] === v) {
			console.log("truth found!")
			return true
		}
		else if (Object.getPrototypeOf(o[i]) === Object.getPrototypeOf({})) {
			console.log(o[i])
			return contains(o[i], v)
		}
	}
	return false
};

// Do not edit below this line
module.exports = contains;
