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
  return ops[eq[1]](eq[0], eq[2])
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

let answered = false

document.addEventListener("keydown", (e) => {
  console.log("keydown: " + e.key)
  for (let i = 0; i < buttonContainer.length; i++) {
    if (e.key == buttonContainer[i].id.slice(5)) {
      buttonContainer[i].style.background = buttonColorPressed
      // if (e.key == operationChars.includes(buttonContainer[i].id.slice(5))) {
      if (operationChars.includes(e.key)) {
        // & After operator symbol entered: 
        // & Should display answer until new input is entered 
        if (equation.length == 0) {
          equation.push(Number(input.value), e.key)
          console.log("operation key pressed when equation.length = 0:") // & 
          console.log(equation) //  &
          input.value = ""
        } else if (equation.length == 2) {
          equation.push(Number(input.value))
          console.log("operation key pressed when equation.length = 2:") // &
          console.log(equation) // &
          input.value = calculate(equation)
          equation.length = 0
          equation.push(input.value)
          equation.push(e.key)
          answered = true;
        }
      } else if (permittedChars.includes(e.key) && equation.length == 0) {
        if (answered == false) {
          let memChar = e.key
        } else {
          return
        }
      }
    } 
    if (e.key == "Enter") {
      e.preventDefault()
      buttonContainer[buttonContainer.length - 1].style.background = buttonColorPressed
      if (equation.length == 2 && input.value != "") {
        // & After enter pressed: 
        // & Should display answer until new input is entered 
        equation.push(Number(input.value))
        input.value = calculate(equation)
        let memOperation = equation[1]
        equation.length = 0
        equation.push(input.value)
        equation.push(memOperation)
        // & repeat operation on new press? 
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


