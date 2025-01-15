console.log("hello")

function add (number) {
	let num = number
	return function (num2) {
		return num + num2
	}
}

let add5 = add(5)
console.log(add5(5)) // 10

// The lexical environments of add() includes the num variable
// The closure is the lexical environment of the fucntion when
// it was declared 
// function(num2) is created and assigned to add5 when add()
// is called, and retains the lexical environment of add()


// factory functions are functions that create objects

function createUser (name) {
	const handle = "@" + name
	return {name, handle}
}

let user1 = createUser("mike")
console.log("name = " + user1.name + "; handle = " + user1.handle)
// name = mike; handle = @mike


// object shorthand
console.log ({user1, add5})
// returns an object with the variable names as keys and 
// values as values

const f0 = 10
const g0 = 11
const h0 = 12
console.log({f0, g0, h0})


// destructuring
// destructing lets you assign object values to variables succinctly
const obj01 = {a: 2, b: 3}
const {a, b} = obj01
console.log({a, b})
// {one: 2, two: 3}

const obj02 = {c: 3, d: 6, e: 8}
const {c, e} = obj02
console.log({c, e})
// {three: 3, four: 6}

const obj03 = {f: 10, g: 11, h: 12, i: 13}
const {g: eleven, h: twelve} = obj03
console.log({eleven, twelve})
// {eleven: 11, twelve: 12}
// by specifying the keys (or index in the case of arrays) you can 
// assign the values from specific keys


// variables and functions (private members?)
function createUser2 (name) {
	const handle = "@" + name

	let reputation = 0
	const getReputation = () => reputation
	const giveReputation = () => reputation++

	return { name, handle, getReputation, giveReputation }

}

const user2 = createUser2("mike")
console.log(user2.name, user2.handle)
// mike @mike

console.log(user2.getReputation())
// 0
user2.giveReputation()
console.log(user2.getReputation())
// 1

// the reputation variable in createUser2() can't be accessed
// because it's not returned in the object that's created. 
// You can only manipulate it to the extent there are exposed
// functions allowing you to. 

function createPlayer (name, level) {
	const { getReputation, giveReputation } = createUser2(name)
	// Creates local variables that are assigned to the 
	// reputation functions of createUser2
	// handle from createUser2 is not imported from createUser2
	// so it can't be returned
	
	const increaseLevel = () => level++
	const getLevel = () => level
	return { name, getReputation, giveReputation, getLevel, increaseLevel }
}

let player1 = createPlayer("mike", 1)

console.log(player1.name, player1.getLevel(), player1.getReputation())
// mike 1 0

player1.increaseLevel()
console.log(player1.getLevel())
// 2

console.log(player1.handle)
// undefined
// we never assigned variables for handle in createPlayer, just
// the reputation functions. 

function createPlayer2 (name, level) {
	const user = createUser2(name)

	const increaseLevel = () => level++
	const getLevel = () => level
	return Object.assign({}, user, {getLevel, increaseLevel})
	// Object.assign(target object, things to add ..n)
	// Here the target is an empty object and we add user in
	// it's entirety (including handle this time), as well 
	// as the level functions. 
}

let player2 = createPlayer2("mike", 0)

console.log(player2.name, player2.getLevel(), player2.getReputation())
// mike 0 0

player2.increaseLevel()
player2.increaseLevel()
console.log(player2.getLevel())
// 2


// Immediately Invoked Function Expressions (IIFE)

const calculator = (function () {
	const add = (a, b) => a + b
	const sub = (a, b) => a - b
	const mul = (a, b) => a * b
	const div = (a, b) => a / b

	return {add, sub, mul, div}
})()

console.log(calculator.mul(5, 5))
// 25


// let var and const scopes

function isCool(name) {
	if (name === "mike") {
		var cool = true
	}

	return cool
}

console.log(isCool("mike"))
// true
// In the above function var cool is avaiable to the entire
// isCool() function because it is a "var". It is not available
// outside of the isCool() function because in js all variables 
// are scoped to the function they're declared in


// closures (wesbos)

function outer () {
	let outerVar = "Hey I am the outervar"

	return function inner() {
		let innerVar = "Hey I am an inner var"
		console.log(innerVar)
		console.log(outerVar)
	}
}

const innerFn = outer()
// assigning innerFn to a call of outer() results in the
// return value of outer() being assigned to innerFn
// This is a closure. outer() was called during the 
// assignment and is done running, but now inner can be called 
// with innerFn()

function createGreeting (greeting = "") {
	return function greet (name) {
		console.log(`${greeting} ${name}`)
	}
}

const sayHello = createGreeting("Hello")
const sayHey = createGreeting("Hey") 

console.log(sayHello("Mike"))
// Hello Mike

console.log(sayHey("Mike"))
// Hey Mike


// Module pattern (IIFE pt 2)

const SomeModule = (function() {})()
// legal, but does nothing

const Formatter = (function () {
	const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`)
	let timesRun = []

	writeToDOM = (selector, message) => {
		document.querySelector(selector).textContent = message
	}

	const makeUppercase = (text) => {
		log("Making uppercase")
		timesRun.push(null)
		return text.toUpperCase()
	}
	return {
		makeUppercase,
		writeToDOM
	}
})()
