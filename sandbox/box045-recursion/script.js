console.log("hello.")

// writing a power function with loop: 

function pow_loop (x, n) {
	let answer = x

	for (let i = 1; i < n; i++) {
		answer *= x
	}

	return answer
}

console.log(pow_loop(5, 2)) // 25

// writing a power function with recursion: 

function pow_recursive (x, n) {
	if (n == 1)	 {
		return x 
	}
	return x * pow_recursive(x, n-1)
}

console.log(pow_recursive(5, 2)) // 25

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
//
// This is what the stack looks like:
// pow(2, 4) = 2 * pow(2, 3)
// pow(2, 3) = 2 * pow(2, 2)
// pow(2, 2) = 2 * pow(2, 1)
// pow(2, 1) = 2
//
// The maximal number of recursive calls is called recursion depth
// Above it's four. It's equal to n in the function above.
//
// Each step above happens in the execution context. There's 4 separate execution contexts
// in the example above. Contexts go into a special data structure called the execution
// context stack. The that structure makes note of the value of each parameter and any variables declared up until the context was paused.
//
// For pow(2, 3): 
// Context: { x: 2, n: 1, at line 1 } pow(2, 1)
// Context: { x: 2, n: 2, at line 5 } pow(2, 2)
// Context: { x: 2, n: 3, at line 5 }


let initialValue = 0
let array01 = [1, 1, 1, 1]
console.log(

	array01.reduce ( (accumulator, currentValue) => {
		accumulator + currentValue
	}, initialValue )

)


