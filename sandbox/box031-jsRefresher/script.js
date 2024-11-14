const greeting = "hello."
console.log(greeting)

const item1 = document.getElementById("item-1")
const item2 = document.getElementById("item-2")

// item1.textContent = "Test."
// item2.textContent = "Test."

// object literal
const obj0 = {
	entry1: "this is a string",
	entry2: 5,
	"entry3": function () {
		console.log("obj0 entry3 is a function")
	},
	"entry3*": "the key for this value has a weird character in it",
	display: function () {
		item1.innerHTML = ""
		for ( k in obj0 ) {
			item1.innerHTML += k + ": " + obj0[k] + "<br>"
		}
	},
	makeEntry: function (a, b) {
		this[a] = b
	},
	deleteEntry: function (a) {
		delete this[a]
	},
}

// constructor function (must be instantiated) 
function objConstructor (a, b) {
	this.entry1 = a
	this.entry2 = b
	this.createEntry = function (a, b) {
		this[a] = b
	}
}

 // class with constructor (must be instantiated)
class ObjClass {
	property1 = ""
	property2 = ""
	constructor (a, b) {
		this.property1 = a
		this.property2 = b
	}
}

let obj1 = new ObjClass("cl", "ass")

function setPropWithFunction (s) {
	return this.property3 = s
}

function setPropWithFunction1 (p, v) {
	return this[p] = v
}

setPropWithFunction.call(obj1, "This property was created and set using the setPropWithFunction.call() function.")
setPropWithFunction1.call(obj1, "property4","So was this, but you can enter a string to name the new property")
setPropWithFunction1.call(obj1, "property5", "This is me checking to see what happens when I put in too many arguments", "...", "3453445353") 
	//The extra arguments are thrown away
setPropWithFunction1.apply(obj1, ["property6", "This property was added using setPropWithFunction1.apply() which takes an array for it's arguments and also throws away superfluous arguments.", "boing"])


let setPropBound = setPropWithFunction1.bind(obj1)
setPropBound("property7", "This property was added using setPropWithFunction1.bind(), which creates a persistent function that can create and set properties of an object")
setPropBound("property8", "Checking to see if i can overwrite properties.")
setPropBound("property8", "The value of this property was overwritten.")

// currying 
// used break fucntion arguments into discreet parts. 
function curry(f) {
	return function(a) {
		return function(b) {
			return f(a, b)
		}
	}
}

function curry2(f) {
	return function(a) {
		return function(b) {
			console.log("function length: " + f.length)
			// the length of a function is the number of parameters it was created with.
			return f(a, b)
		}
	}
}

/*
	Stepping through the above function: 

	curry(f) creates a variable 'f' that is stored in memory, returns
	function(a), which creates a variable 'a' which is stored in memory, returns
	function (b), which creates a variable 'b', returns
	f(a, b)

	Up until the final return of f(a, b) all we're doing is setting up variables

*/

function add (a, b) {
	return a+b
}

let curriedAdd = curry(add)
let curriedAdd2 = curry2(add)

// curriedAdd(2)(2) => 4
// curriedAdd2(2)(2) => function length: 2; 4

let functionLengthTest = (...args) => console.log(functionLengthTest.length)
// doesn't work

function functionLengthTest2 (func) {
	return func.length
}
// returns the number of parameters in the original function if called as functionLengthTest2(add), but not if called with parentheses. 

function add2 (...args) {
	return args.reduce( (a, i)=> a + i, 0 )	
}
// functionLengthTest2 returns 0 for add2 because of the rest operator

function curryAdv (func) {
	return function curried (...args) {
		if (args.length >= func.length) {
		//if there are more or an equal number of arguments provided than func has parameters
			console.log(this)
			return func.apply(this, args)
			// apply the arguments to func
		} else {
			return function (...args2) {
				// otherwise, store the provided argument in whatever function you create
				return curried.apply(this, args.concat(args2))
				// and add the new arguments to the end of the previous arguments to complete the function
			}
		}		
	}
}

let curriedAdd2Adv = curryAdv(add2)
// doesn't work because currying doesn't work with function with an undetermined number of parameters

let curriedAddAdv = curryAdv(add)
// works

let curriedAddAdvLock2 = curriedAddAdv(2)
// curriedAddAdvLock2(2) => 4
// curriedAddAdvLock2(4) => 6
