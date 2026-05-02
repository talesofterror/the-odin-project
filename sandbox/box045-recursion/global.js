function fib (n, result = []) {
	if (n == 0) return [0]
	if (n == 1 ) return [0]
	if ( n == 2 ) return [0, 1]
	else {
		result.push(...fib(n-1))
		let lastIndex = result.length-1
		result.push(result[lastIndex] + result[lastIndex-1])
		return result
	}
}

function merge (array) {
	if (array.length == 1) {
		return array
	}
	else {
		let rightHalf = merge(array.splice(Math.floor(array.length/2)))
		let leftHalf = merge(array)
		let newArray = []
		let lengthIsOne = rightHalf.length == 1 || leftHalf.length == 1

		for (let i = 0; newArray.length < rightHalf.length + leftHalf.length; i++) {
			for (let j = 0; j < leftHalf.length; j++) {
				if (rightHalf[i] < leftHalf[j]) {
					newArray.unshift(rightHalf[i])
					if (lengthIsOne) {
						newArray.push(leftHalf[j])
					}
				}
				else {
					newArray.unshift(leftHalf[j])
				if (lengthIsOne) {
						newArray.push(rightHalf[i])
					}
				}
			}
		}

		return newArray
	}
}

