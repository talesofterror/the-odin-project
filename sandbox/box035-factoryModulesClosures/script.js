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









