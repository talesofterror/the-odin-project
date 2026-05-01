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

/*
 * 1. Split the array down the middle (or close to)
 * 2. Take half the og array and split it again
 * 3. Repeat until there's one item in the array
	* */

/* 

[1, 2, 3]
1, 2 		3
1

*/

it("sorts an array from smallest to biggest", ()=> {
	console.log(merge([4, 7, 2, 8]))
	expect(merge([4, 7, 2, 8])).toEqual([2, 4, 7, 8])
	expect(merge([3, 2])).toEqual([2, 3])
})
