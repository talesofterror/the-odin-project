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