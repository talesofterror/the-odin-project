let userChoice = document.querySelector(".input")
let choice = document.querySelector(".choice-declaration") 
let fightButton = document.querySelector(".fight-button")
let landingImage = document.querySelector(".landing-image")
landingImage.src = "images/rps-circle-ezgif.gif"

let computerOptions = ["rock", "paper", "scissors"]

let randomValue = (length) => Math.floor(Math.random() * length)
let computerChooser = () => computerOptions[randomValue(3)]
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
		landingImage.src = "images/rps-circle-ezgif.gif"
	} 
	else if (userChoice.value != "default") {
		fightButton.style.display = "block"
		choice.textContent = `You chose ${userChoice.value}`
		choice.style.display = "block"
		landingImage.src = "images/b1p-rock.png"
		userChoiceVisualizer()
		game()
	}
}

function userChoiceVisualizer() {
	if (userChoice.value == "rock") {
		landingImage.src = uVisualizerRandomizer("rock") 
	} else if (userChoice.value == "paper") {
		landingImage.src = uVisualizerRandomizer("paper") 
	} else if (userChoice.value == "scissors") {
		landingImage.src = uVisualizerRandomizer("scissors") 
	}
}

function uVisualizerRandomizer(type) {
	let choicesR = ["images/b1p-rock.png", "images/b2p-rock.png"]
	let choicesP = ["images/b1p-paper.png", "images/b2p-paper.png"]
	let choicesS = ["images/b1p-scissors.png", "images/b2p-scissors.png"]
	let decision

	if (type == "rock") {
		decision = choicesR[randomValue(2)]
	} else if (type == "paper") {
		decision = choicesP[randomValue(2)]
	} else if (type == "scissors") {
		decision = choicesS[randomValue(2)]
	}

	return decision
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


