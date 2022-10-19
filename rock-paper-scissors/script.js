let userInput = document.querySelector(".userInput");
let result = document.querySelector(".result") 
result.textContent = userInput.value

let choice = ["rock", "paper", "scissors"]

let playerChoice = userInput
let computerChoice

let fighter = {
    player : playerChoice,
    computer : computerChoice
}

addEventListener ("change", 
() => {
	computerChoice = choice[randomValue()]
	playerChoice = userInput.value
	switch (computerChoice) {
		case playerChoice == computerChoice:
			result.textContent = `Result: Tie`
			break;
		case playerChoice == rock && computerChoice == paper
	}
    result.textContent = `Result: ${userInput.value}` 

})

console.log(userInput.value)

let randomValue = () => Math.floor(Math.random() * 3)


computerChoice = choice[randomValue()]



// console.log(window.crypto.getRandomValues())


