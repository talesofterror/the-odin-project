const totalIntegers = function(o) {
	if (typeof o !== "object" || o === null) return

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
};
  
// Do not edit below this line
module.exports = totalIntegers;
