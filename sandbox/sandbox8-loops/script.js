

let getId = (element) => document.getElementById(element)

let pets = ["Melvin", "Miles", "Tyson", "Kitty", "Brownie", "Zeus", "Harley"]

// for..of loop

let title = document.createElement("span")
title.textContent = "for..of loop: Pets[]"
document.querySelector(".container").appendChild(title)
document.querySelector(".container").insertBefore(title, getId("pets"))

for (pet of pets) {												// logs the value of each index
	getId("pets").textContent += pet + " "
}

for (pet in pets) {												// logs index numbers, no values
	console.log(pet)
}

// map

let setToJake = (string) => string = "jake"

let petsMapped = pets.map(setToJake)

console.log(petsMapped)
