/*
 * Interface segregation says you should not force a class  or instance to use an
 * interface that has things that won't be used by the class or instance.
 *
 * */

class Animal {
	constructor (name) {
		this.name = name
	}

	eat () {
		console.log(`${this.name} ate`)
	}

	fly () {
		console.log(`${this.name} flew`)
	}
}

const birdie = new Animal("birdie")
const piggy = new Animal("piggy")
birdie.fly() // ok
piggy.fly() // NOOO!!!

// Pigs don't fly, so we have to try another way

class Animal2 {
	constructor (name) {
		this.name = name
	}

	eat() {
		console.log(`${this.name} ate`)
	}
}

class Bird extends Animal2 {
	fly () {
		console.log(`${this.name} flew`)
	}
}

const birdy = new Bird("birdy")
const piggie = new Animal2("piggie")

module.exports = {birdy, piggie}
