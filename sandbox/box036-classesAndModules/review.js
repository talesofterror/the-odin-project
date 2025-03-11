function log (string) {
	console.log(string)
}

log("hello")
log("hello " + "with concatenation")

// object
let Object1 = {
	prop1: 1,
	prop2: 3
}

log(Object1.prop1)
log(Object1.prop2)

// constructor
function Object2 () {
	this.prop1 = 1
	this.prop2 = 3
	let prop3 = 5
	this.func1 = () => this.prop1 + this.prop2

}

log(Object2)
log(Object2.func1) // undefined
// log(Object2.func1()) // is not a function
let object2_1 = new Object2
log(object2_1.func1()) // 4
object2_1.prop1 = 2
log(object2_1.func1()) // 5
log(object2_1.prop3) // undefined
// adding "return {prop3} breaks the function"

// let object1_1 = new Object1 // Object1 is not a constructor

function Object3 () {
	let prop1 = 1
	let prop2 = 3
	this.prop3 = 5

	// return { prop1, prop2, prop3 } // attempting to return "prop3" created an error
	return { prop1, prop2 } }

log(Object3) // returns object definition
log(Object3.prop1) // undefined
log(Object3.prop3) // undefined

let object3_1 = new Object3

log(object3_1.prop1) // 1
log(object3_1.prop3) // undefined

function Object4 () {
	let prop1 = 2
	let prop2 = 4
	let func1 = () => {
		this.prop1 + this.prop2
	}
	let func2 = () => {
		return prop1 + prop2
	}
	function func3 () {
		return this.prop1 + this.prop2
	}

	return {prop1, prop2, func1, func2, func3}
	// return {prop1, prop2, func3}

}

let object4_1 = new Object4
console.log(object4_1.func1()) // undefined undefined without return keyword
console.log(object4_1.func2()) // 6
object4_1.prop1 = 3
console.log(object4_1.func2()) // still 6
console.log(object4_1.func3()) // 7

let assignedObject3 = Object.assign(object3_1, object4_1)

console.log(assignedObject3)



