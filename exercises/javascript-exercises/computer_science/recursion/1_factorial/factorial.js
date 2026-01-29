const factorial = function(n) {
	if (typeof(n) != "number" || n < 0 || Math.trunc(n) != n) {
		return undefined
	}
	if (n == 0) {
		return 1
	}
	else if (n == 1) {
		return n
	}
	else {
		return n * factorial(n-1)
	}
};

// Do not edit below this line
module.exports = factorial;
