
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
// entry contains another object (department)? recursion depth = maximal number of
// contexts.

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


// Linked List: A recursive ordered list with a "next" property referencing the next item
// in the list (which is itself of the same type as object a whole). 

function linkedList01 (v) {
	return {
		value: v,
		next: null,
	}
}

let list01 = linkedList01(10)
list01.next = linkedList01(11)
list01.next.next = linkedList01(12)
list01.next.next.next = linkedList01(13)

// A linked list with a recursive depth of 4

function printValues (list, base = 0) {
	if (list.next == null) {
		return list.value + base
	}
	else {
		base += list.value
		// console.log("current value of base: " + base)
		return printValues(list.next, base)
	}
}

function countItems (list, base = 0) {
	if (list.next == null) {
		return ++base // here and below I have to prefix increment and i'm not yet sure why
	}
	else {
		// console.log(base)
		return countItems(list.next, ++base)
	}
}

// manipulating the linked list

//split
let list02 = list01.next.next // new list is assigned to the desired "next" point in the list
list01.next.next = null // the last "next" value of the last item in the original list is nulled
console.log("first list is " + countItems(list01) + " items long")
console.log("second list is " + countItems(list02) + " items long")

//join 
list01.next.next = list02

console.log("first list is now " + countItems(list01) + " items long")

// prepend
list01 = {value: 9, next: list01}
console.log("first list now has " + countItems(list01) + " items")

// remove
list01.next = list01.next.next
console.log("first list now has " + countItems(list01) + " items")

// divide and conquer: divide a problem into two or more subproblems (base and recursive cases)
// so as to more easily solve the larger problem.

// doubly linked list: when each node has pointers to the prev and next node. 
// better for manipulating
//
// the less properties the better, since the stack will keep copies of all of them

let testObject = {
	first: "first value",
	second: 2,
	third: [3],
	fourth: {
		fifth: 4
	}
}

const meaningOfLifeArray = [42]

const object = {
	data: {
		duplicate: "e",
		stuff: {
			thing: {
				banana: NaN,
				moreStuff: {
					something: "foo",
					answer: meaningOfLifeArray,
				},
			},
		},
		info: {
			duplicate: "e",
			magicNumber: 44,
			empty: null,
		},
	},
};

function contains (o, v) {
	for (let i in o) {
		if (o[i] === v) {
			return true
		}
		else if (Object.getPrototypeOf(o[i]) == Object.getPrototypeOf({})) {
			// return contains(o[i], v) == false ? 
		}
	}
	return false
}

function contains2 (o, v) {
	let entries = Object.entries(o)
	for (let i = 0; i < entries.length; i++) {
		if (entries[i] == v) {
			true
		}
		else {
			if (Object.getPrototypeOf(entries[i]) === Object.getPrototypeOf({})) {
				return contains2(entries[i], v) == true
			}
		}
	}
}

function contains3 (o, v) {
	console.log(o)
	if (o != null && (o.__proto__ != {}.__proto__)) {
		console.log(o === v)
		if (o===v) {
			return true
		}
		// return o[i] === v
	}
	else {
		for (let i in o) {
			// return contains3(o[i], v)
			contains3(o[i], v)
		}
	}
}

function contains4 (o, v, t = false) {
	console.log(o)
	if (o != null && (o.__proto__ != {}.__proto__)) {
		if (o===v) {
			console.log(o === v)
			return true
		}
	
		// return o[i] === v
	}
	
}
