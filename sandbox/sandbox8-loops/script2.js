const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let admitted = 'Admit: ';
let refused = 'Refuse: ';
let refusedArr = []
let admitArr = []

for (i = 0; i < people.length; i++) {

	if (people[i] == "Phil" || people[i] == "Lola") {
		refusedArr.push(people[i])
	}
	else {
		admitArr.push(people[i])
	}
}

for (j = 0; j < refusedArr.length; j++){
	if (j == refusedArr.length - 1) {
		refused += `${refusedArr[j]}.`
	} else {
		refused += `${refusedArr[j]}, ` 
	}
}

for (k = 0; k < admitArr.length; k++) {
	if (k == admitArr.length - 1) {
		admitted += `${admitArr[k]}.`
	} else {
		admitted += `${admitArr[k]}, `
	}
}

// first iter: 
// j = 0; refused.length = 2
// if j == 0


console.log("\n" + admitted + "\n" + refused)

let array = [ 1, 2, 3, 4 ]
const removeFromArray = function(array, target) {
	let newArr = []
	let i_newArr = 0
	for (i = 0; i <= array.length - 1; i++) {
		for (j = 0; j <= arguments.length-2; j++) {
			if (newArr[i_newArr] == array[i]) {
				continue
			} else {
				if (array[i] == arguments[j+1]) {
					continue	
				} else {
					newArr[i_newArr] = array[i]
					i_newArr++
					}
			}
		}
		
	}
	
	return newArr
};


// maybe create an separate array from arguments[1] through arguments[n] and
// search it separately 

const removeFromArray2 = function(array, target) {
	let newArr = []
	let i_newArr = 0
	for (i = 0; i <= array.length - 1; i++) {
		for (j = 0; j < arguments.length-1; j++) {
			if (array[i] == arguments[j+1]) {
				continue	
			} else {
				if (newArr[i_newArr-1] == array[i]) {
					continue
				} else {
					newArr[i_newArr] = array[i]
					i_newArr++
				}
			}
		}
		
	}
	
	return newArr
};

const removeFromArray3 = function (array) {
	newArr = []
	argArr = []
	i_newArr = 0
	for (i = 0; i <= arguments.length-2; i++) {
		argArr[i] = arguments[i+1]	
	}

	for (i = 0; i <= array.length - 1; i++) {
		for (j = 0; j <= argArr.length - 1; j++) {
				if (array[i] == argArr[j]) {
				break	
				} else {
					if (newArr.length > 0){
						for (k = 0; k < newArr.length; k++) {
							if (newArr[k] == array[i]) {	
						  break
							} else {
							continue
							}
						}
					} else {
					newArr[i_newArr] = array[i]
					i_newArr++
				}
			}
		}
	}
	

	return newArr;
}

const removeFromArray4 = function (array) {
	newArr = []
	argArr = []
	i_newArr = 0
	for (i = 0; i <= arguments.length-2; i++) {
		argArr[i] = arguments[i+1]	
	}

	for (i = 0; i <= argArr.length-1; i++) {
		for (j = 0; j <= array.length-1; j++) {	
			if (argArr[i] == array[j]) {
				break
			} else {
				newArr[i_newArr] = array[j]
				i_newArr++
			}
		}
}

	return newArr;
}

const findInArray = function (array) {
/*	
	console.log(array)

	for (i = 0; i <= array.length - 1; i++) {
		console.log("array.length method: Index = " + i + " // Index Value = " + array[i])
	}

	for (i = 0; i < array.length; i++) {
		console.log("array.length method: Index = " + i + " // Index Value = " + array[i])
	}
*/

	/*

	[1, 2, 3, 4]
	[2, 4]
 
		loop through the [a] array
		individually compare each value to a value on the [b] array
		if the value of the current index is NOT equal to a value on [b]
			>add to new array [n]
		if the value of the current index is equal to a value on [b] array
			> skip

 if [a] is in [b]
  skip
 else 
  if [a] is in [n]
   skip
  else
	 add [a] to [n]


if [a] is already in [a], do i need to continue the loop?
if the loops reaches the end without finding [a] in [n], we can safely add [a]
if the loop finds [a] in [n], exit the loop

	 */

	let newArr = []
	let response

	for (i = 0; i < array.length; i++) {
		if (arguments[1] == array [i]) {
			response = `${arguments[1]} is in the array!`
		} else {
			response = `unable to find ${arguments[1]}`
		}
	}

return response

}

const removeFromArray5 = function (array) {
	let newArr = []
	let argArr = []
	let i_newArr = 0
	for (i = 0; i <= arguments.length-2; i++) {
		argArr[i] = arguments[i+1]	
	}

	for (i = 0; i <= array.length - 1; i++) {
		for (j = 0; j <= argArr.length - 1; j++) {
			if (array[i] == argArr[j]) {continue} 
			else {
				if (newArr.length > 0) {
				for (k = 0; k < newArr.length; k++) {
					if (newArr[k] == array[i]) {	
						continue
					} else if (k == newArr.length-1) {
						newArr[i_newArr] = array[i]
						i_newArr++
					} else {break}
				}
				} else {
				newArr[i_newArr] = array[i]
				i_newArr++
				}
			}
		} 
	}
	return newArr;
}
	
const removeFromArray6 = function (array) {
	let newArr = []
	let argArr = []
	let i_newArr = 0
	for (i = 0; i <= arguments.length-2; i++) {
		argArr[i] = arguments[i+1]	
	}

	for (i = 0; i <= array.length - 1; i++) {
		for (j = 0; j <= argArr.length - 1; j++) {
			if (array[i] == argArr[j]) {
				break
			}
			else {
				for (k = 0; k <= newArr.length; k++) {
					if (newArr[k] == array[i]) {
						break
					}
					else if (k == newArr.length - 1 || newArr.length == 0) {
						newArr[i_newArr] = array[i]
						i_newArr++
					}
					else {
						continue
					}
				}
			}
		}
	}
	return newArr;
}

const removeFromArray7 = function (array) {
	let newArr = []
	let argArr = []
	let i_newArr = 0

	for (i = 0; i <= arguments.length-2; i++) {
		argArr[i] = arguments[i+1]	
	}

	for (i = 0; i <= array.length - 1; i++) {
		for (j = 0; j <= argArr.length - 1; j++) {
			if (argArr[j] == array[i]) {break}
			else if (j == argArr.length-1) {
				newArr[i_newArr] = array[i]
				i_newArr++ 
			}
			else {continue}
		}
	}
	return newArr;
}


const sumAll = function() {
	let maxedVals = [arguments[0], arguments[1]].sort((x, y) => x-y)
	let holsterArray = []
	let answer = 0 

	if (typeof arguments[0] != "number" || typeof arguments[1] != "number") return "ERROR"
	if (arguments[0] < 0 || arguments[1] < 0) return "ERROR"

	for (i = 0; i < maxedVals[1]; i++) {
		holsterArray[i] = maxedVals[0] + i
	}

	for (i = 0; i <= holsterArray.length -1; i++) {
		answer += holsterArray[i]
	}
	
	return answer
	
};

