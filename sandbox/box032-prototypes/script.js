const greeting = "hello."
console.log(greeting)

let obj0 = {
	testProp: "Hello",
}

function Book (title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function () {
		return this.title + " by " + this.author + ", "
			+ this.pages + " pages, "
			+ (read? "not read yet" : "already read")
	}
}

let neuromancer = new Book("Neuromancer", "William Gibson", 304, true)
let theStranger = new Book("The Stranger", "Albert Camus", 145, true)
let dune = new Book("Dune", "Frank Herbert", 412, false)

neuromancer.info()
console.log(Book.prototype) // returned the Book object constructor
console.log(Object.getPrototypeOf(neuromancer)) // returns the Book object constructor
console.log(Object.getPrototypeOf(Book)) // returns native code (which defines an object generally? The native code in question is not provided)

Book.prototype.rating = 0
theStranger.rating = 5
neuromancer.rating = 5

console.log(neuromancer.valueOf()) 
		// valueOf() is defined in the Object prototype,
	 // which is the prototype that Book is derived from.
	// neuromancer inherits from Book, which inherits from
 // Object, which is why we can call valueOf() from neuromancer.
//  neuromancer.valueOf() returns an object of type Book 

console.log("Does the Dune object itself have a valueOf() function? => " + dune.hasOwnProperty("valueOf"))
console.log("Does the Object prototype have the valueOf() function? => " + Object.prototype.hasOwnProperty("valueOf"))
			// Object.hasOwnProperty("valueOf") doesn't work. 

console.log(Object.getPrototypeOf(Object.prototype))
// returns null.. End of the chain. 
console.log(Object.getPrototypeOf(Object))
// returns native code

// Set Prototype

function Person (name) {
	this.name = name
}

Person.testProp0 = "Test"
// adds testProp0 to the "constructor" section of the console
Person.prototype.testProp1 = "Test"
// adds testProp1 to as a property to Person

let guy = new Person("Guy")

console.log(guy.testProp0)
// returns undefined
console.log(guy.testProp1)
// returns "Test"
