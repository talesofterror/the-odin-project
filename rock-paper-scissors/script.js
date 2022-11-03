let userChoice = document.querySelector(".input")
let choice = document.querySelector(".choice-declaration") 
let fightButton = document.querySelector(".fight-button")
let titleImage = document.querySelector(".title-image")

// let choice = ["rock", "paper", "scissors"]

let randomValue = () => Math.floor(Math.random() * 3)
let computerChooser = () => choice[randomValue()]
let c
let numberOfRounds = 5

addEventListener ("change", 
() => {
	choice.textContent = choiceDeclarer()	

	if (userChoice.value == "default") {
		fightButton.style.display = "none"
	} else {
		fightButton.style.display = "block"
		game()
	}

})

// DESIGN FUNCTIONS

function choiceDeclarer() {
	let choiceText;
	if (userChoice.value == "default") {
		choice.style.display ="none"
	}	else {
		choiceText = `You chose ${userChoice.value}`
		titleImage.style.display = "none"
	}
	return choiceText
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


