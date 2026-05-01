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
		let leftHalf = merge(array.splice(Math.floor(array.length/2)))
		let rightHalf = merge(array)
		let newArray = []

		for (let i = 0; i < leftHalf.length; i++) {
			for (let j = 0; j < rightHalf.length; j++) {
				if (leftHalf[i] < rightHalf[j]) {
					newArray.unshift(leftHalf[i])
				}
				else newArray.unshift(rightHalf[j])
			}
		}

		return newArray
	}
}
