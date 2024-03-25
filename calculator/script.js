
// * branch test
// * branch test 4

// & Consider keeping the equation array a constant length and 
// & assigning it's elements as needed



"use strict"


let buttonColorDefault = getComputedStyle(document.documentElement).getPropertyValue("--buttonDefault")
let buttonColorPressed = getComputedStyle(document.documentElement).getPropertyValue("--buttonPressed")

let permittedChars = "1234567890.".split('')
let operationChars = "+-*/".split('')
let buttonContainer = [].slice.call(document.getElementById("button-container").children)

let input = document.getElementById("input")

let ops = new Operations()

let equation = []

function Operations() {
  this["+"] = function add(a, b) {
    return a + b
  }
  this["-"] = function subtract(a, b) {
    return a - b
  }
  this["*"] = function multiply(a, b) {
    return a * b
  }
  this["/"] = function divide(a, b) {
    return b == 0 ? 0 : a / b
  }
}

function calculate(eq) {
  return ops[eq[1]](Number(eq[0]), Number(eq[2]))
}

window.onload = function () {
  input.focus()
}
document.addEventListener("click", () => input.focus())

input.addEventListener("input", (e) => {
  if (e.data != permittedChars.filter((el) => el == e.data)) {
    input.value = input.value.slice(0, input.value.length - 1)
  }
})

let displayLatch = false
let repeatOperationLatch = false

function repeatOperationDriver() {
  let memValue = equation[2]
  let memOperation = equation[1]
  equation.length = 0
  equation.push(memOperation)
  equation.push(memValue)
  displayLatch = true
  repeatOperationLatch = false
}

document.addEventListener("keydown", (e) => {
  console.log("keydown: " + e.key)
  for (let i = 0; i < buttonContainer.length; i++) {
    if (e.key == buttonContainer[i].id.slice(5)) {
      buttonContainer[i].style.background = buttonColorPressed
      // if (e.key == operationChars.includes(buttonContainer[i].id.slice(5))) {
      if (operationChars.includes(e.key)) {
        if (equation.length == 0) {
          equation.push(input.value, e.key)
          displayLatch = true
          // input.value = ""
        } else if (equation.length == 2) {
          equation.push(input.value)
          input.value = calculate(equation)
          equation.length = 0
          equation.push(input.value, e.key)
          displayLatch = true
        }
      } 
    }
  }
  if ((e.key == "Enter" || e.key == "=") && input.value != "") {
    e.preventDefault()
    buttonContainer[buttonContainer.length - 1].style.background = buttonColorPressed
    if (equation[1] == operationChars.find(e => e == equation[1]) && repeatOperationLatch == false) {
      equation.push(input.value)
      input.value = calculate(equation)
      repeatOperationDriver()
      repeatOperationLatch = true
    }
    else {
      equation.unshift(input.value)
      input.value = calculate(equation)
      repeatOperationDriver()
    }
  }
  if (e.key == "Delete") {
    e.preventDefault()
    input.value = ""
    equation = equation.slice(equation.length)
    buttonContainer[0].style.background = buttonColorPressed
  }
  if (e.key == "s") {
    input.value = input.value * -1
    buttonContainer[1].style.background = buttonColorPressed
  }
  else if (permittedChars.includes(e.key)) {
    if (displayLatch) {
      input.value = input.value.slice(0, input.value.length - 2)
      displayLatch = false
    }
  }
})

document.addEventListener("keyup", (e) => {
  for (let i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].style.background = buttonColorDefault
  }
})

document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("button")) {
    e.target.style.background = buttonColorPressed
  }
})
document.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("button")) {
    e.target.style.background = buttonColorDefault
  }
})



