const removeFromArray = function(array, target) {
	let newArr = []
	let i_newArr = 0
	for (i = 0; i <= array.length - 1; i++) {
		for (j = 0; j <= arguments.length-1; j++) {
			if (array[i] == arguments[j+1]) {
				continue	
			} else {
					if (i_newArr[i] == array[i]) {
						continue
					} else {
					newArr[i] = array[i]
					i_newArr++
					}
			}
		}
	}
	
	return newArr
};

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
