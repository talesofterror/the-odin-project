let userChoice = document.querySelector(".input")
let prompt = document.querySelector(".prompt") 
prompt.textContent = "Choose a fighter:"
let fightButton = document.querySelector(".fight-button")

let choice = ["rock", "paper", "scissors"]

let computerChoice
let randomValue = () => Math.floor(Math.random() * 3)

addEventListener ("change", 
() => {
	prompt.textContent = choiceDeclarer()	

	if (userChoice.value == "default") {
		fightButton.style.display = "none"
	} else {
		fightButton.style.display = "block"
	}

})

function choiceDeclarer() {
	let promptText;
	if (userChoice.value == "default") {
		promptText = "What are you waiting for? Choose!"
	}	else {
		promptText = `You chose ${userChoice.value}`
	}
	return promptText
}


computerChoice = choice[randomValue()]



// console.log(window.crypto.getRandomValues())


