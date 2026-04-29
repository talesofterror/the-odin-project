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

it("fib(1) returns [0]", ()=> {
	expect(fib(1)).toEqual([0])
})
it("fib(2) returns [0, 1]", ()=> {
	expect(fib(2)).toEqual([0, 1])
})
it("fib(4) returns [0, 1, 1, 2]", ()=> {
	expect(fib(4)).toEqual([0, 1, 1, 2])
})
it("fib(5) returns [0, 1, 1, 2, 3]", ()=> {
	expect(fib(5)).toEqual([0, 1, 1, 2, 3])
})

/*

0, 1: push.(0 + 1) => 1
0, 1, 1: push.(1 + 1) => 2
0, 1, 1, 2: push.(2 + 1) => 3

*/


