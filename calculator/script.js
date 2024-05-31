
"use strict"


let buttonColorDefault = getComputedStyle(document.documentElement).getPropertyValue("--buttonDefault")
let buttonColorPressed = getComputedStyle(document.documentElement).getPropertyValue("--buttonPressed")

let displayChars = "1234567890.".split('')
let operationChars = "+-*/".split('')
let buttonContainer = [].slice.call(document.getElementById("button-container").children)

let input = document.getElementById("input")
let equationViewer = document.getElementById("equation-viewer")

window.onload = function () {
  input.focus()
}

document.addEventListener("click", () => input.focus())

input.addEventListener("input", (e) => {
  if (e.data != displayChars.filter((elem) => elem == e.data)) {
    input.value = input.value.slice(0, input.value.length - 1)
  }
})

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

let ops = new Operations()

let equation = []
let answer = 0
let lastInput = ""

function calculate(eq) {
  let result = ops[eq[1]](Number(eq[0]), Number(eq[2]))
  answer = result
  return result
}

/* 

[operations listener]
if keydown == operation character:
  if input{} empty
   return
  else: 
    if equation[] empty:
      push input.value to equation[0]
      push e.key to equation[1]
    if equation[0] and [1]
      push input value to equation[2]
      calculate
      display answer
      equation[].length = 0

[enter / equals listener]
if keydown == "enter" || key == "="
  if input{} empty
    return
  else:
    if equation[] empty
      return
    if equation[0] and [1]
      push input value to equation[]
      calculate(equation[])
      display answer
      equation[].length = 0

  if Latched
    if operation key pressed
      clear
      push answer to equation
      push operation to equation
      display equation in euqationDisplay
      set latched false
      wait for next input
    if equals pressed
      clear equation
      push answer to equation
      push last operation to equation
      push last input to eqaution
      display answer

*/

let latched = false
let lastOp = ""

function operationCalc() {
  if (!latched){
    equation.push(input.value)
  }
  lastOp = equation[1]
  lastInput = equation[2]
  input.value = calculate(equation)
  equationViewer.textContent = equation.join(" ") + " = " + answer
  latched = true
}

function operationKeyPressed(e) {
  if (input.value == "") {
    return
  }
  else {
    if (equation.length == 0) {
      equation.push(input.value)
      equation.push(e.key)
      console.log(equation)
      equationViewer.textContent = equation.join(" ")
      input.value = e.key
    }
    else if (equation.length == 2) {
      operationCalc()
    }
    if (latched) {
        equation.length = 0
        equation.push(answer)
        equation.push(e.key)
        input.value = ""
        latched = false
        return
      }
  }
}

function enterEqualsPressed(e) {
  e.preventDefault()
  buttonContainer[buttonContainer.length - 1].style.background = buttonColorPressed
  if (input.value == "") {
    return
  }
  else {
    if (equation.length == 0) {
      return
    }
    else if (equation.length == 2) {
      operationCalc(e)
    }
    else if (latched) {
      equation.length = 0
      equation.push(answer)
      equation.push(lastOp)
      equation.push(lastInput)
      operationCalc(equation)
    }
  }
}

document.addEventListener("keydown", (e) => {
  console.log("keydown: " + e.key)
  if (operationChars.includes(input.value)) {
    input.value = ""
  }

  for (let i = 0; i < buttonContainer.length; i++) {
    if (e.key == buttonContainer[i].id.slice(5)) {
      buttonContainer[i].style.background = buttonColorPressed
    }
  }
  if (operationChars.includes(e.key) && !latched) {
    operationKeyPressed(e)
  }
  if (e.key == "Enter" || e.key == "=") {
    enterEqualsPressed(e)
  }
  if (e.key == "Delete") {
    e.preventDefault()
    input.value = ""
    equation.length = 0
    answer = 0
    lastInput = null
    lastOp = null
    latched = false
    buttonContainer[0].style.background = buttonColorPressed
    equationViewer.textContent = ""
  }
  if (e.key == "s") {
    input.value = input.value * -1
    buttonContainer[1].style.background = buttonColorPressed
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



