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


