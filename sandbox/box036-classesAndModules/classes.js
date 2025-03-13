
class Class1 {
	prop1 = "prop1" // 'this' doesn't work here

	constructor (name, age) {
		this.name = name // need to say "this" in constructor?
		this.age = age
	}

	introduction() { // don't say function
		console.log(`sup. my name is ${this.name} and i'm ${this.age}`)
	}

	changeName(newName) {
		this.name = newName
	}
}

function class1_1 (name, age) {
	function introduction() { // need to say function
		console.log(`sup. my name is ${name} and i'm ${age}`)
	}

	return {introduction} // need to return anything i want access to
}


let person1 = new Class1("Mortimer", 12)
person1.introduction()
let person1_1 = new class1_1("mortimer", "twelve")
person1_1.introduction()

console.log(typeof Class1)
console.log(Class1.prototype) 
console.log(Object.getOwnPropertyNames(Class1))
// array: ['Length', 'name', 'prototype']
console.log(Object.getOwnPropertyNames(Class1.name)) 
// returns an array with indices for each letter in "Class1"
// plus one index "length". the indices have values 1, 2, 3, etc
// except for the last. Not sure why
console.log(Object.getOwnPropertyNames(Class1.prototype))
// ['constructor', 'introduction', 'changeName']
console.log(Object.getOwnPropertyNames(person1)) // ['name', 'age']

for (item in person1_1) {
	console.log(item)
}
// logs 'introduction'

for (item in person1) {
	console.log(item)
}
// logs 'name' and 'age'

let User1 = class {
	stuff = "thing" // class field
	thing = "stuff" // class field : created on a per object basis
									// not present in Class.prototype
}

let user1 = new User1
console.log(user1.stuff)
user1.thing = "thing"
console.log(user1.thing)

function makeClass (thing) {
	return class {
		sayThing() {
			console.log(thing)
		}
	}
}

let user2 = makeClass("thing")
// user2.sayThing() // nope. has to be called with new
new user2().sayThing()
let user3 = new user2()
user3.sayThing() // each refers to the line where I do console.log(thing)

class Class2 {
	constructor (name) {
		this.name = name
	}

	get name() {
		return this._name
	}

	set name(value) {
		if (value.length < 4) {
			console.log("too short, bruv")
		} else { this._name = value }
	}
}

let person2 = new Class2("Chino")
console.log(person2.name)
person2.name = "Moreno" 
console.log(person2.name)


// the this problem 

class Class3 {
	constructor (name) {
		this.name = name
	}

	sayName() {
		console.log(this.name)
	}
}

let button = new Class3("Miles")
setTimeout(button.sayName, 1000)
// doesn't work because the object context is lost
setTimeout(() => button.sayName(), 1000)
// works 

// could also do 

class Class3_1 {
	constructor(name) {
		this.name = name

		this.sayName2 = this.sayName.bind(this)
	}
	
	sayName = () => console.log(this.name)
}

let button1 = new Class3_1("Melvin")
setTimeout(button1.sayName, 1000)
// works
setTimeout(button1.sayName2, 1000)
// also works
