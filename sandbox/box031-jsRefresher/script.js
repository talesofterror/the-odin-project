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


function curry(f) {
	return function(a) {
		return function(b) {
			return f(a, b)
		}
	}
}

function add (a, b) {
	return a+b
}

let curriedAdd = curry(add)
