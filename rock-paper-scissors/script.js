let input = document.querySelector(".userInput").value;
let result = document.querySelector(".result") 
result.textContent = input

let choice = ["rock", "paper", "scissors"]

let playerChoice = input
let computerChoice

let fighter = {
    player : playerChoice,
    computer : computerChoice
}


let randomValue = () => Math.floor(Math.random() * 3)


computerChoice = choice[randomValue()]



// console.log(window.crypto.getRandomValues())


