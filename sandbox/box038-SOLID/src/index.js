const {Car2, ErrorHandler} = require("./1_singleResponsibility.js")
const {Vehicle2, HybridVehicle} = require("./2_openClosed.js")
const {Rectangle2, Square2} = require("./3_liskovSubstitution.js")
const {piggie, birdy} = require("./4_interfaceSegregation.js")

console.log("hi")

class Calculator {
	add (num1, num2) {
		return num1 + num2
	}

	sub (num1, num2) {
		return num1 - num2
	}
}

let calculatorInstance = new Calculator()

console.log(Calculator.prototype)
console.log(Calculator.__proto__)
console.log(calculatorInstance.prototype) // nope. only functions 
	// (and things based on functions like classes) have a prototype
console.log(calculatorInstance.__proto__)

console.log(calculatorInstance.add( 5, 5 ))

console.log(Object.getPrototypeOf(calculatorInstance))

let calculatorInstance2 = { name: "sally" }

// Object.assign(calculatorInstance, calculatorInstance2)

let nissan = new Car2("nissan", "versa")
nissan.start()

let ford = new Vehicle2(10, 10)
let prius = new HybridVehicle(10, 10, 10)

console.log(ford.getRange())
console.log(prius.getRange())

let rectangle = new Rectangle2(5, 10)
let square = new Square2(10)

console.log(square.height)
square.setHeight(20)
console.log(square.height)

console.log(piggie)
piggie.eat()
console.log(birdy)
birdy.fly()
