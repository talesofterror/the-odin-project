// Collatz conjecture
// (as an example of branching in the recursive case)
function collatz(n, acc = 0) {
	if (n == 1) {
		console.log(n)
		console.log("total number of steps to 1: " + acc)
		return
	}
	else if (n % 2 == 0) { // is even
		console.log(n)
		acc++
		collatz(n/2, acc)
	}
	else { // is odd
		console.log(n)
		acc++
		collatz(3 * n + 1, acc)
	}
}

collatz(5)