const contains = function(o, v) {
	let values = Object.values(o)

	let valueArray = []

	for (let [i, value] of values.entries()) {
		if (values[i] != null && (values[i].__proto__ == {}.__proto__)){
			valueArray.push(contains(value, v))
		}
		else if (Number.isNaN(v)) {
			if (Number.isNaN(value)) valueArray.push(true)
		}
		else {
			valueArray.push(Object.is(value, v))
		}
	}

	return valueArray.includes(true)
};

// Do not edit below this line
module.exports = contains;
