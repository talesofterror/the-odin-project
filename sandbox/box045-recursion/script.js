console.log("hello.")

// writing a power function with loop: 

function pow_loop (x, n) {
	let answer = x

	for (let i = 1; i < n; i++) {
		answer *= x
	}

	return answer
}

console.log(pow_loop(5, 2)) // 3125

// writing a power function with recursion: 

function pow_recursive (x, n) {
	if (n == 1)	 {
		return x 
	}
	return x * pow_recursive(x, n-1)
}

console.log(pow_recursive(5, 2))

/*

	n became the basis of the exit condition, changes the deeper it goes
	x never changes value insid the function

	mathematically written: x^n = x * x^(n-1)

	splits the task into two branches. the branches extend with each 
	recursive function call. The branches diverge at the conditional
	statements.

	each recursive function call reduces the problem to a simpler form,
	in this case by reducing the value of n. 

*/

// console.log(pow_recursive(5, 100000))	// 100,000 exceeds the maximum rescursion depth
// 																				// max depth depends on max call stack, but is 
// 																				// set to an amount below the actually max call
// 																				// stack size
