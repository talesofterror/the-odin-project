// fibonacci (recursive)

function fib (n, result = []) {
	if (n <= 0) {
		return [0 ,1]
	}
	else {
		result.push(...fib(n-1))
		result.push(result[n] + result[n-1])
		return result
	}
}
// returns the correct array for all values except 
// fib(0), which returns 

function fib2 (n, result = [0]) {
	if (n < 2) {
		return [0]
	}
	else {
		result.push( ...fib2(n-1), ...fib2(n-2) )
		return result
	}
}
// nope

function fibIndex (n) {
	if (n<2) { return n }
	else { 
		return (fibIndex(n-1)+fibIndex(n-2))
	}
}
// from the khan video -- returns the fibonacci number
// at the n-index

function fib3 (n) {
	if (n<2) { return n}
	else { 
		result = []
		result.push(fib(n-1) + fib(n-2))
		return result
	}
}
// nope


function fib4 (n, result = []) {
	if (n <= 0) {
		return [0]
	}
	if ( n == 1 ) {
		return [0, 1]
	}
	else {
		result.push(...fib(n-1))
		result.push(result[n] + result[n-1])
		return result
	}
}
// works as far as returning the fibonacci sequence, 
// but doesn't do it up to the right index: fib(5)
// should return [0, 1, 1, 2, 3]
