let choice = ["rock", "paper", "scissors"]

let playerChoice = "playerChoice"
let computerChoice = "computerChoice"

let fighter = {
    player : playerChoice,
    computer : computerChoice
}

let randomValue = () => Math.floor(Math.random() * 3)

// console.log(window.crypto.getRandomValues())

let val3 = 0xf000001f, val4 = 1
console.log(Math.imul(val3, val4))