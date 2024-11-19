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
console.log(Object.getPrototypeOf(Book)) // returns native code (the text of the Book constructor as seen in Book.toString())

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
// adds testProp1 to Person as a property to Person

let guy = new Person("Guy")

console.log(guy.testProp0)
// returns undefined
console.log(guy.testProp1)
// returns "Test"

Person.prototype 
// returns the Person constructor when entered in console
Object.getPrototypeOf(Person.prototype)
// returns the prototype of Person, which is Object.prototype
Object.toString()
// returns "function Object() { [native code] }"

	

Person.prototype.sayName = function () {
	console.log(`hi, my name is ${this.name}`)
}
// adds the sayName function to Person 

function Player(name, marker) {
	this.name = name 
	this.marker = marker
}
// Player constructor

Player.prototype.getMarker = function () {
	console.log(`my marker is ${this.marker}`)
}
// adds the getMarker function to Player

console.log(Object.getPrototypeOf(Player.prototype))
// returns Object.prototype (the default prototype for an object pre-inheritance)

Object.setPrototypeOf(Player.prototype, Person.prototype)
console.log(Object.getPrototypeOf(Player.prototype))
// returns Person.prototype. Object.prototype is still there. 

Object.setPrototypeOf(Player.prototype, Book.prototype)
console.log(Object.getPrototypeOf(Player.prototype))
// replaces Person.prototype with Book.prototype. Person.prototype no longer there.

// Player.prototype = Person.prototype
// console.log(Object.getPrototypeOf(Player.prototype))
// This is not done.
// This would set Player.prototype to the actual memory value of Person.prototype
// rather than a copy of that value. The result would be editting shared property on
// the new Object constructor would instead edit the property on Person.prototype. 

Object.setPrototypeOf(Player.prototype, Person.prototype)

const player1 = new Player("mike", "@")
const player2 = new Player("miles", "^")

player1.sayName()
player1.getMarker()

