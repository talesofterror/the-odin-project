import {greeting, farewell, chitChat} from "./moduleOne.js"
import modOne from "./moduleOne.js"

function greet() {
	return greeting
}

function bidAdieu() {
	return farewell
}

function chat() {
	return chitChat
}

console.log(greet())
console.log(chat())
console.log(bidAdieu())
console.log(modOne)

// Unable to reach any of these functions directly in devtools
