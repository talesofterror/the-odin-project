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
		if (array[i] == argArr[i]) {
			continue
		} else {
			newArr[i_newArr] = array[i]
			i_newArr++
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
				continue
			} else {
				newArr[i_newArr] = array[j]
				i_newArr++
			}
		}
	}

	return newArr;
}

