

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


