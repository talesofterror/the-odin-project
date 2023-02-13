const removeFromArray = function(array, target) {
	let newArr = []
	let i_newArr = 0
	for (i = 0; i <= array.length - 1; i++) {
		if (array[i] == target) {
			continue	
		} else {
			newArr[i_newArr] = array[i]
			i_newArr++
		}
	}
	return newArr
};


// Do not edit below this line
module.exports = removeFromArray;
