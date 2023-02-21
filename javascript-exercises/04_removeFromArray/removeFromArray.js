const removeFromArray = function (array) {
	let newArr = []
	let argArr = []
	let i_newArr = 0

	for (i = 0; i <= arguments.length-2; i++) {
		argArr[i] = arguments[i+1]	
	}

	for (i = 0; i <= array.length - 1; i++) {
		for (j = 0; j <= argArr.length - 1; j++) {
			if (argArr[j] === array[i]) {break}
			else if (j == argArr.length-1) {
				newArr[i_newArr] = array[i]
				i_newArr++ 
			}
			else {continue}
		}
	}
	return newArr
}

//const removeFromArray = function(array, target) {
//	let newArr = []
//	let i_newArr = 0
//	for (i = 0; i <= array.length - 1; i++) {
//		if (array[i] == target) {
//			continue	
//		} else {
//			newArr[i_newArr] = array[i]
//			i_newArr++
//		}
//	}
//	return newArr
//};



// Do not edit below this line
module.exports = removeFromArray;
