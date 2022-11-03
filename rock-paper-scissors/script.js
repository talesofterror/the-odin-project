let userChoice = document.querySelector(".input")
let choice = document.querySelector(".choice-declaration") 
let fightButton = document.querySelector(".fight-button")
let titleImage = document.querySelector(".title-image")

let computerOptions = ["rock", "paper", "scissors"]

let randomValue = () => Math.floor(Math.random() * 3)
let computerChooser = () => computerOptions[randomValue()]
let c
let numberOfRounds = 5

addEventListener ("change", 
() => {

userChooser()

})

// DESIGN FUNCTIONS

function userChooser () {

	if (userChoice.value == "default") {
		fightButton.style.display = "none"
		choice.style.display ="none"
		titleImage.style = "flex"
	} 
	else if (userChoice.value != "default") {
		fightButton.style.display = "block"
		choice.textContent = `You chose ${userChoice.value}`
		choice.style.display = "block"
		titleImage.style.display = "none"
		game()
	}
}


// GAME FUNCTIONS

function game() {
	let result
	c = computerChooser()
	if (userChoice.value == c) {
		result = "Tie!"
	} else if (userChoice.value == "rock" && c == "paper") {
		result = "You lose"
	} else if (userChoice.value == "rock" && c == "scissors") {
		result = "You win!"
	} else if (userChoice.value == "paper" && c == "rock") {
		result = "You win!" 
	} else if (userChoice.value == "paper" && c == "scissors") {
		result = "You lose!"
	} else if (userChoice.value == "scissors" && c == "rock") {
		result = "You lose!" 
	} else if (userChoice.value == "scissors" && c == "paper") {
		result = "You win!"
	}

	return result
}

function rounds () {
	let result = []
	for (i = 0; i < numberOfRounds; i ++) {
		console.log("Round " + (i+ 1) + ": " + game())
	}
}


