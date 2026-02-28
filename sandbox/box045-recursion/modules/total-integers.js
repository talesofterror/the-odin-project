
let integersArray = [1, 2, 3, "t", [3]]

function totalIntegers (o) {
	let values = Object.values(o)

	let count = 0
	for (let [i, value] of values.entries()) {
		if (Number.isInteger(value)) {
			count++
		}
		else {
			if (value != null 
				&& (value.__proto__ == {}.__proto__
					|| value.__proto__ == [].__proto__)) {
				count += totalIntegers(value)
			}
			else continue
		}
	}
	return count
}

// ~~~~~~~~~~~~~
//
// Array.some() checks if at least one element meets the criteria
// Array.every() checks if every element meets the criteria