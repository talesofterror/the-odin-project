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

console.log ({user1, add5})
// returns an object with the variable names as keys and 
// values as values


// destructuring
// destructing lets you assign object values to variables succinctly
const obj01 = {a: 2, b: 3}
const {one, two} = obj01
console.log({one, two})
// {one: 2, two: 3}

const obj02 = {c: 3, d: 6, e: 8}
const {three, four} = obj02
console.log({three, four})
// {three: 3, four: 6}
// without specifying keys the values will match only consecutively

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






