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

// Do not edit below this line
module.exports = sumAll;
