
let container = document.querySelector("#container")
// grabs the first element (the only in this case) with the name "container"

let display = document.querySelector(".display")

let controls = document.querySelector(".controls")

console.dir(container.firstElementChild)
// console.dir prints the element's properties in a dropdown in the console
console.dir(display.nextElementSibling)
console.dir(controls.parentElement)

console.dir(document.querySelectorAll("div"))
// returns a NodeList in the console
// It's not an array 

console.log(Array.from(document.querySelectorAll("div")))
// this can be iterated through, a NodeList can't 

let nodelistToArray = Array.from(document.querySelectorAll("div"))
let nodelistArraySpread = [...nodelistToArray]
console.log(nodelistArraySpread)
console.log(nodelistToArray)
// Was trying to find out what OP meant about using the spread operator to
// create an array out of a NodeList but I don't think this is what they
// meant. Redundant, they nodelistToArray and nodelistArraySpread both return
// the same array. 

let newElement = document.createElement("div")
newElement.className = "new-element"
container.appendChild(newElement)
console.dir(document.querySelector(".new-element"))

 