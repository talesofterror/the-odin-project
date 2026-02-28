let permutationArray0 = [ [1, 2, 3], [2, 3, 1], [1, 3, 2] ]
let permutationArray1 = [1, 2, 3]

function checkArrays (searchTarget, b) {
	return searchTarget.some( inner => 
		inner.every ( (value, index) => value == b[index] )
	)
}

function fac(n) {
	return n == 1 ? 1 : n * fac(n-1)
}

function moveIndex (index, a) {
	let final = []
	for (let [i,value] of a.entries()) {
		let lastIndex = i == a.length-1
		if (lastIndex) continue
		let next = lastIndex? a[0] : a[i+1]
		a.splice(i, 1, lastIndex? 0 : next)
		// console.log(a)
		a.splice(lastIndex ? 0 : i+1, 1, index)
		// console.log(a)
		final.push([...a])
	}
	return final
}

function permutations0 (a) {

	let prelimArray = []
	let finalArray = []
	if (!checkArrays(prelimArray, a)) { prelimArray.push([...a]) }
	let lastIndex = prelimArray[prelimArray.length-1]
	
	for ( let value of [...lastIndex] ) {
		prelimArray.push(moveIndex(value, lastIndex))
	}

	for ( let [i, v] of prelimArray.entries() ) {
		if (i == 0) {
			finalArray.push(v)
			continue
		}
		else {
			finalArray.push(v)
		}
	}

	return finalArray

}

/*
 *
 * let a = [1, 2, 3]
 * a.toSpliced(0, 1, 2).toSpliced(1, 1, 1)
 * (3) [2, 1, 3]
 *
 * [1, 2, 3]
 * [2, 1, 3]
 * [2, 3, 1]
 * [3, 2, 1]
 * [1, 3, 2]
 * [3, 1, 2]
 *
 * [1, 2, 3] ///moving the 1
 * [2, 1, 3]
 * [2, 3, 1]
 * [3, 2, 1] /// moving the 2
 * [3, 1, 2]
 * [2, 3, 1] x
 * [2, 1, 3] /// moving the 3 x
 * [3, 2, 1] x
 * [2, 3, 1]
 *
 * // note on moveIndex: I tried doing final.push(a), but the final array kept
 * changing during the loop. This was because pushing `a` means a reference
 * (not a true copy) of a is pushed to final[]. Using the spread operator
 * (final.push([...a])) pushes a new array in which all the values in a 
 * (in it's current state) are added. 
 *
 *
 * Base case: 
 *	fac(initArray) == finalArray.length
 * Recursive case:
 * 	!''
 * Recursive statement: 
 * 	permutations(finalArray.lastIndex)
 *
 * */


// console.log(`permutation check: ${permutations0(0)}`)

function permutations (a) {
	
	if (a.length == 1) {
		return [[a[0]]]
	}

	let result = []
	let currentIndex = a[0]
	let remainder = permutations(a.slice(1))

	for (let index of remainder) {
		for (let i = 0; i <= index.length; i++) {
			let left = index.slice(0,i)
			let right = index.slice(i)
			result.push([...left, currentIndex, ...right])
		}
	}

	return result
}

