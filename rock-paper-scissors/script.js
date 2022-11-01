let userChoice = document.querySelector(".input")
let prompt = document.querySelector(".prompt") 
prompt.textContent = "Choose a fighter:"
let fightButton = document.querySelector(".fight-button")

// let choice = ["rock", "paper", "scissors"]

let randomValue = () => Math.floor(Math.random() * 3)
let computerChooser = () => choice[randomValue()]
let c
let numberOfRounds = 5

addEventListener ("change", 
() => {
	prompt.textContent = choiceDeclarer()	

	if (userChoice.value == "default") {
		fightButton.style.display = "none"
	} else {
		fightButton.style.display = "block"
		game()
	}

})

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

// DESIGN FUNCTIONS

function choiceDeclarer() {
	let promptText;
	if (userChoice.value == "default") {
		promptText = "What are you waiting for? Choose!"
	}	else {
		promptText = `You chose ${userChoice.value}`
	}
	return promptText
}


