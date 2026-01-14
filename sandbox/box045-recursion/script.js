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

let pow = (x, n) => pow_recursive(x, n)
let test = 0

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
//					/////
//
//	function pow_recursive (x, n) {
//		if (n == 1)	 {
//			return x 
//		}
//		return x * pow_recursive(x, n-1)
//	}
//					//////
//
//
// This is what the stack looks like for pow(2, 4):
// pow(2, 4) = 2 * pow(2, 3)
// pow(2, 3) = 2 * pow(2, 2)
// pow(2, 2) = 2 * pow(2, 1)
// pow(2, 1) = 2
//
// The total number of recursive calls is called recursion depth
// Above it's four. It's equal to n in the function above.
//
// Each step above happens in the execution context. There's 4 separate execution contexts
// in the example above. Contexts go into a special data structure called the execution
// context stack. That structure takes note of the value of each parameter and any variables 
// declared up until the context was paused.
//
// For pow(2, 3): 
// Context: { x: 2, n: 3, at line 5 }
// Context: { x: 2, n: 2, at line 5 } pow(2, 2)
// Context: { x: 2, n: 1, at line 1 } pow(2, 1)
// 

// remembering how Array.reduce works:
let initialValue = 0
let array01 = [1, 1, 1, 1]
console.log(
	array01.reduce(
		(accumulator, currentValue) => accumulator + currentValue, initialValue)
)
// NOTE: tried the above with brackets around the arrow function's statement and it didn't work
// bc using brackets with an arrow function requires the 'return' keyword 

let company = { 
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) { 
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { 
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700

// in the above example employees are always an array and departments are always keyed
// objects. The sumSalaries function sums all the employee salaries recursively. 
// First is checks if the passed argument is an array. If it is an array, then that 
// means it's going to be an array of employee objects. it calls argument.reduce to 
// go through each array entry to sum up all the salary value of each employee object, 
// and returns that value.
//
// If the argument is not an array then it starts a loop that goes through the value 
// of each entry in the object (Object.values(department)). For each entry it calls
// itself with the value (either an array or an object) of the current loop index, and 
// adds the value of that recursive call to a sum variable that keeps a running count of 
// the total salaries at each iteration. Once the loop finishes it returns the final
// value of sum. 
//
// The sumSalaries function wants ultimately to find an array  (the base case) and 
// extract a single value from it. Each call to sumSalaries (the recursive case) can be
// thought of as a branch. Each object entry is a branch, and the tip of the branch 
// always has an array.
//
// I'm guessing the recursion depth is... 2? or equal to the number of times each 
// entry contains another object (department)?

// Collatz conjecture
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

collatz(500)

