console.log("hey")

let obj1 = {
	name: "mike",
	surname: "misery",

	get fullName () {
		return `${this.name} ${this.surname}`
	},

	set fullName (name) {
		[this.name, this.surname] = name.split(" ")
	},
}

// get() and set() are accessors that can indirectly retrieve or
// assign the value of a property. set() takes one argument.

console.log(obj1.fullName)
obj1.fullName = "david bowie"
console.log(obj1.fullName)

Object.defineProperty(obj1, "name", {
	value: "beau",
	enumerable: true,
	writable: false
})

console.log(obj1.fullName)

// Object.defineProperty is a longform way to create or
// change a property or accessor on an object. there are 
// options like being able to set whether it can be 
// enumerated or its value changed. 

let obj2 = {
	name: "sally",
	surname: "smith",
}

Object.defineProperty(obj2, "fullName", {
	get() { return `${this.name} ${this.surname}` },
	set(name) { [this.name, this.surname] = name.split(" ") }
})

console.log(obj2.name)
console.log(obj2.fullName)
obj2.fullName = "rolf hauser"
console.log(obj2.fullName)

let obj3 = {
	get name() {
		return this._name
	},

	set name(value) {
		if (value.length < 4) {
			console.log(`WARNING: "${value}" is too short. Please enter a name longer than 3 characters`)
		} else {this._name = value}
	}
}

obj3.name = "Albert"
console.log(obj3.name)
obj3.name = "Al"
obj3.name = "Albert"
console.log(obj3.name)
