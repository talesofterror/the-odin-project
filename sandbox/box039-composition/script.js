console.log("hi")

const barker = (state) => ({
	bark: () => console.log("woof, i am " + state.name)
})

// Adding the parenthesis makes the compiler treat 
// the braces as an object literal rather than a function.
// writing this without the parentheses creates a function
// which expects a return statement. The colon in that 
// would instance would create a label rather than an
// object property 

const driver = (state) => ({
	drive: () => state.position = state.position + state.speed
})

barker({name: 'karo'}).bark()

// passes an object to the state parameter of the barker 
// constructor function. 

let barkingDriver = {
	name: "Simon",
	position: 10,
	speed: 10
}

driver(barkingDriver).drive()
console.log(barkingDriver.position) // 20

Object.assign(barkingDriver, barker(barkingDriver))
console.log(barkingDriver)
// the functions in the barker constructor were assigned to 
// barkingDriver.
Object.assign(barkingDriver, driver(barkingDriver))
console.log(barkingDriver)
// the functions in the driver constructor were assigned to 
// barkingDriver

// A class-like function using constructors: 

const murderRobotDog = (name) => {
	state = {
		name, 
		speed: 100,
		position: 1,
	}
	return Object.assign(
		{},
		barker(state),
		driver(state)
	)
}

let toothy = murderRobotDog("toothy") // no "new" keyword
toothy.bark()

class catDriver {
	constructor(name) {
		this.name = name
	}

	position = 10
	speed = 1
}

let samuel = new catDriver("samuel")

Object.assign(samuel, driver(samuel))

console.log(samuel.drive())
