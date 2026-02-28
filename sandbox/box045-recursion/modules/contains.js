let testObject = {
	first: "first value",
	second: 2,
	third: [3],
	fourth: {
		fifth: 4
	}
}

const meaningOfLifeArray = [42]

const object = {
	data: {
		duplicate: "e",
		stuff: {
			thing: {
				banana: NaN,
				moreStuff: {
					something: "foo",
					answer: meaningOfLifeArray,
				},
			},
		},
		info: {
			duplicate: "e",
			magicNumber: 44,
			empty: null,
		},
	},
};

function contains (o, v) {
	for (let i in o) {
		if (o[i] === v) {
			return true
		}
		else if (Object.getPrototypeOf(o[i]) == Object.getPrototypeOf({})) {
			// return contains(o[i], v) == false ? 
		}
	}
	return false
}

function contains2 (o, v) {
	let entries = Object.entries(o)
	for (let i = 0; i < entries.length; i++) {
		if (entries[i] == v) {
			true
		}
		else {
			if (Object.getPrototypeOf(entries[i]) === Object.getPrototypeOf({})) {
				return contains2(entries[i], v) == true
			}
		}
	}
}

function contains3 (o, v) {
	console.log(o)
	if (o != null && (o.__proto__ != {}.__proto__)) {
		console.log(o === v)
		if (o===v) {
			return true
		}
		// return o[i] === v
	}
	else {
		for (let i in o) {
			// return contains3(o[i], v)
			contains3(o[i], v)
		}
	}
}

function contains4 (o, v) {
	let values = Object.values(o)

	values.forEach( (i) => {
		console.log(i)
		if (i == v) {
			
		}
		else {
			if ( i != null && (i.__proto__ == {}.__proto__)) {
				
			}
			else return false
		}
	})
}

function contains5 (o, v) {
	let values = Object.values(o)
	// console.log(o)

	for (let [i, value] of values.entries()) {
		// console.log(`index: ${i}, value: ${value}`)
		if (values[i] === v) {
			return true
		}
		else if (values[i] != null && (values[i].__proto__ == {}.__proto__)) {
			return contains5(values[i], v)
		}
		else if (i != values.length){
			continue
		}
		else return false
	}
}

function contains6 (o, v) {
	let values = Object.values(o)
	// console.log(`evaluating: ${values}`)

	let valueArray = []

	for (let [i, value] of values.entries()) {
		// console.log(`looping index: ${value}`)
		if (values[i] != null && (values[i].__proto__ == {}.__proto__)){
			valueArray.push(contains6(value, v))
		} 
		else {
			valueArray.push(value === v)
		}
	}

	// console.log("VALUE ARRAY: ")
	// console.log(valueArray)
	return valueArray.includes(true)
}

/*
	I need the answer to bubble up... 
	The first time I recurse into contains needs to return the right boolean
*/

console.log(contains6(object, 44))

// ~~~~~~~~~~~~~~
