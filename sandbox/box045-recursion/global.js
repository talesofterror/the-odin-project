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
