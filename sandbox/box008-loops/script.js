

let getId = (element) => document.getElementById(element)

let pets = ["Melvin", "Miles", "Tyson", "Kitty", "Brownie", "Zeus", "Harley"]

// for..of loop

let forOfTitle = document.createElement("span")
forOfTitle.textContent = "for..of loop: Pets[]"
document.querySelector(".container").insertBefore(forOfTitle, getId("pets"))

for (pet of pets) {												// logs the value of each index
	getId("pets").textContent += pet + " "
}

for (pet in pets) {												// logs index numbers, no values
	console.log(pet)
}

// map

let setToJake = (string) => string = "jake "

let petsMapped = pets.map(setToJake)

let mappedSection = document.createElement("section")
mappedSection.id = "mapped"
mappedSection.textContent = petsMapped
document.querySelector(".container").appendChild(mappedSection)

let mappedTitle = document.createElement("span")
mappedTitle.textContent = "Pets[] mapped"
document.querySelector(".container").insertBefore(mappedTitle, getId("mapped"))

// filter 

function firstLetter (string) { 
	if (string.charAt(0) == "M"){	// could also use string.startsWith("M")
		return string
	}
}

let petsFiltered = pets.filter(firstLetter)

let filteredSection = document.createElement("section")
let filteredTitle = document.createElement("span")
document.querySelector(".container").appendChild(filteredSection)
document.querySelector(".container").insertBefore(filteredTitle, filteredSection)

filteredTitle.textContent = "Pets[] filtered"
filteredSection.textContent = 
	`Only the M names: ${petsFiltered}!`

// bare looping 

let resultDiv = document.createElement("div")
let squareSection = document.createElement("section")
let squareTitle = document.createElement("span")
let squareInput = document.createElement("input")
let squareBtnCalc = document.createElement("button")
squareBtnCalc.textContent = "Calculate"
squareBtnCalc.addEventListener("click", function () {square(squareInput.value)})
let squareBtnClear = document.createElement("button")
squareBtnClear.textContent = "Clear"
squareBtnClear.addEventListener("click", 
	function () {resultDiv.textContent = " "; squareInput.value = " "})
document.querySelector(".container").appendChild(squareSection)
document.querySelector(".container").insertBefore(squareTitle, squareSection)
squareTitle.textContent = "A simple loop"
squareSection.innerHTML = "Enter a number and hit the button to calculate up to that value. <br> "
squareSection.appendChild(squareInput)
squareSection.appendChild(squareBtnCalc)
squareSection.appendChild(squareBtnClear)

function square (limit) {
	if (resultDiv.textContent != " "){ resultDiv.textContent = " " }
	for (x = 1; x <= limit; x++) {
		let result
		result = x * x
		// console.log(x + " x " + x + " = " + result)
		resultDiv.innerHTML += x + " x " + x + " = " +  result + "<br>"
		squareSection.appendChild(resultDiv)
	}
}

// finding specific values in an array with formatted values

let foods = ["protein:eggs", "carb:bread", "starch:potato", "sugar:ice cream"]

function finderFunction (target) {
	let result
	for (i = 0; i < foods.length; i++) {	
		let item = foods[i].split(":")
		if (item[1] == target) {
			result = item[0]
			break;
		}
	}
	return result
}
