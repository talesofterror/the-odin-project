const greeting = "hello."
console.log(greeting)

function Hero (name, level) {
	this.name = name
	this.level = level 
}

Hero.prototype.greet = function () {
	return `Hi, my name is ${this.name}`
}

function Warrior (name, level, weapon) {
	Hero.call(this, name, level)

	this.weapon = weapon
}
// CHAINING CONSTRUCTORS
// Creates a Warrior prototype that links to the Hero constructor.
// Hero.call(this, name, level) passes the arguments provided
// when calling the Warrior() constructor to the Hero constructor, 
// specifying that the 'this' value within Hero should refer to
// the 'this' value of the newly created Warrior object. Also 
// creates a property, this.weapon, that exists only within Warrior 
// objects. Warrior objects should have all the properties 
// defined in the Hero constructor as well as anything defined 
// in the Warrior prototype. Warrior object will NOT inherit properties
// or methods added to Hero.prototype (ie. Hero.prototype.greet())
//
// Warrior.prototype returns Warrior constructor
// 
// Object.getPrototypeOf(Warrior.prototype)
// Object.getPrototypeOf(Hero.prototype)
// ^ both return the Object prototype

Object.setPrototypeOf(Warrior.prototype, Hero.prototype)
Object.setPrototypeOf(Healer.prototype, Hero.prototype)
// After adding the above the Warrior and Healer types now have access
// to the methods and properties defined via Hero.prototype

function Healer (name, level, spell) {
	Hero.call(this, name, level)

	this.spell = spell
}
// same but a Healer

Warrior.prototype.attack = function () {
	return `${this.name} attacks nothing in particular with ${this.weapon}`
}

Healer.prototype.heal = function (target) {
	return `${this.name} heals ${target.name} with ${this.spell}`
}

// Add abilities to Warrior and Healer only, not Hero

let hero1 = new Warrior("Bjorn", 1, "Frosty Axe of Hurting")
let hero2 = new Healer("Skjorn", 1, "Soothe")

// let heroTest = new hero1()
// returns "Uncaught TypeError: hero1 is not a constructor"

///////////////////////////////////////////////////////////////

let animal = {
	eats: true,
	walk: function () {
		console.log("*walks*")
	}
}

let rabbit =  {
	jumps: true
}

let wolf = {
	howls: true
}

rabbit.__proto__ = animal

Object.setPrototypeOf(wolf, animal)

console.log(rabbit)
console.log(wolf)
console.log(rabbit.__proto__)
console.log(Object.getPrototypeOf( rabbit ))
console.log(wolf.__proto__)
console.log(Object.getPrototypeOf( wolf ))

// wolf.__proto__ = rabbit

// console.log(wolf.__proto__)
// console.log(Object.getPrototypeOf( wolf ))

// animal.__proto__ = wolf
// Returns Uncaught TypeError: Cyclic __proto__ value

let longEar = {
	earLength: 10
}

longEar.__proto__ = rabbit
// longEar contained all the members in the chain of inheritance
// ie. eats, jumps, and earLength

rabbit.walk = function () {
	console.log("*hops*")
}

// wolf.prototype.walk = function () {console.log("*stalks*")}
// Returns error: cannot set properties of undefined

let user = {
	name: "John", 
	surname: "Smith",

	set fullName(value) {
		[this.name, this.surname] = value.split(' ')
	},

	get fullName() {
		return `${this.name} ${this.surname}`
	}
}
// set fullName()... above allows you to do fullName = 
// "Namey McNamehaver", which will set name and surname to
// the appropriate values based on space separation. Using 
// user.name would return "Namey"
// get fullName()... above takes elements of the object and 
// does something to them. using user.fullname gets you the 
// result of the operation. 
// With set, writing to a property is the similar to calling 
// a function

let admin = {
	__proto__: user,
	isAdmin: true
}

admin.fullName = "Jorge Borges"

let human = {
	walk() {
		if (!this.isSleeping) {
			console.log("human walks")
		} else {
			console.log("too sleepy to walk")
		}
	},
	sleep() {
		this.isSleeping = true
	}
}
// Not sure if I learned this before, but function members can be 
// defined directly as above without regular making a key:value 
// pair. 

let burglar = {
	crime: true
}

burglar.__proto__ = human

for (let prop in burglar) {
	let hasOwn = burglar.hasOwnProperty(prop)

	if (hasOwn) {
		continue
	} else {

		console.log(prop)
	}
}
// burglar.hasOwnProperty will check if the property is present in 
// burlar specifically. Without this check the for..loop would log
// all the properties of both burglar and human

// 1: true, 2: null, 3: undefined

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

table.__proto__ = head
bed.__proto__ = table
pockets.__proto__ = bed

function benchmark () {
	console.time("pockets test")
	console.log(pockets.glasses)
	console.timeEnd("pockets test")

	console.time("head test")
	console.log(head.glasses)
	console.timeEnd("head test")
}

////

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food)
	}
}

let speedy = {
	__proto__: hamster
}

let lazy = {
	__proto__: hamster
}

speedy.eat("apple")

console.log("Speedy's stomach: " + speedy.stomach)
console.log("Lazy's stomach: " + lazy.stomach)

// The contents of both hamster's stomachs become "apple". 
// I think this is because these objects are created as 
// object literals. Specifying "this" on these properties 
// creates an LSP error. 

function Hamster () {
	this.stomach = [],
	this.eat = function (food) {
		this.stomach.push(food)
	}
}

let happy = new Hamster()
let dopey = new Hamster()

happy.eat("orange")
console.log("Happy's stomach: " + happy.stomach)
console.log("Dopey's stomach: " + dopey.stomach)

// This works as intended (ie. only happy's stomach contains ""orange")
// Unlike with the object literals before this, I can use "this" with the
// object constructor. Everyone get's their own stomach. 

console.log(this)
this.newWindowProperty = "I'm a new window property"
newWindowProperty = "this new window property exists in the global scope, which is the window"


function show() {
	console.log(this === window)
}

function show2 () {
	"use strict"
	console.log(this === undefined)
}


let car = {
	brand: "Honda",
	getBrand() {
		return this.brand
	}
}

let bike = {
	brand: "Arch"
}

let bikeBrand = car.getBrand.bind(bike)
console.log(bikeBrand())
// bikeBrand only logs properly if called as "bikeBrand()" with parentheses. 
// bind(), available to all functions, replaces the "this" value of the function
// with the argument provided. 

function Car () {
	if (!(this instanceof Car)) {
		throw Error("Hi. This is a custom error! Must use the new operator to call this constructor")
	}
}

// let Audi = Car()
// instanceof is an operator that tests if the left hand arguments is an instance of
// the right hand argument. Goes down the chain of inheritance. 

function Car2() {
	if (!new.target) {
		throw Error("Same")
	}
}

// let Kia = Car2()
// new.target does something similar. It checks if the function was called with the 
// new operator. Oddly, the above assignment doesn't produce the error, but calling 
// Car2() directly does. 

function announceBrand(text) {
	console.log(text + this.brand)
}

let silverado = {
	brand: "chevy",
	model: "silverado"
}
let tacoma = {
	brand: "toyota",
	model: "tacoma"
}

announceBrand.call(silverado, "Brand: ")
announceBrand.apply(tacoma, ["Brand: "])
