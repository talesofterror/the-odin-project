const reverseString = function(string) {
	let reverseArr = []
	for (i = 0; i < string.length; i++) {
		reverseArr.push(string[i])
	}
	let reverseString = ''
	for (i = reverseArr.length - 1; i >= 0; i--) {
		reverseString += reverseArr[i]
	}
	return reverseString
};

// Do not edit below this line
module.exports = reverseString;
