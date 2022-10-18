let input = document.querySelector(".userInput");
let result = document.querySelector(".result") 
result.textContent = input.value

let choice = ["rock", "paper", "scissors"]

let playerChoice = input
let computerChoice

let fighter = {
    player : playerChoice,
    computer : computerChoice
}

addEventListener ("change", 
() => {
	computerChoice = choice[randomValue()]
	playerChoice = input.value
	switch (computerChoice) {
		case playerChoice == computerChoice:
			result.textContent = `Result: Tie`
			break;
	}
    result.textContent = `Result: ${input.value}` 

})

console.log(input.value)

let randomValue = () => Math.floor(Math.random() * 3)


computerChoice = choice[randomValue()]



// console.log(window.crypto.getRandomValues())


