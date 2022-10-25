let userChoice = document.querySelector(".input")
let prompt = document.querySelector(".prompt") 
prompt.textContent = "Choose a fighter"

let choice = ["rock", "paper", "scissors"]

let playerChoice = userChoice
let computerChoice
let randomValue = () => Math.floor(Math.random() * 3)

let fighter = {
    player : playerChoice,
    computer : computerChoice
}



addEventListener ("change", 
() => {

	prompt.textContent = choiceDeclarer()

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


