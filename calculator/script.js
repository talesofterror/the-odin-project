
"use strict"


let buttonColorDefault = getComputedStyle(document.documentElement).getPropertyValue("--buttonDefault")
let buttonColorPressed = getComputedStyle(document.documentElement).getPropertyValue("--buttonPressed")
let buttonColorHover = getComputedStyle(document.documentElement).getPropertyValue("--buttonHover")

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
  if (!displayChars.includes(e.data)) {
    input.value = input.value.slice(0, input.value.length -1)
  }
})

let equation = []
let answer = 0
let lastInput = ""
let lastOp = ""
let latched = false

function calculator() {
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

let calcFunctions = new calculator()

function calculate(eq) {
  let result = calcFunctions[eq[1]](Number(eq[0]), Number(eq[2]))
  answer = result
  return result
}

// todo 
/* 
  // Decimal when input blank
  //   add zero then dot, wait for input
  Add constraints for amount of digits in display
    9 total? may need to adjust font size
  // Backspace doesn't work right
  //   deletes two digits instead of one
  Contingency for very large / very small numbers
    Scientific notation?
  Divide by zero contingency
    ...???
  // When using mouse, operator key leaves operation sign on next input
*/
// todo

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
    operatorKeyBehavior(e.key)
  }
  if (e.key == "Enter" || e.key == "=") {
    enterEqualsBehavior(e.key)
  }
  if (e.key == "Delete") {
    deleteBehavior(e)
  }
  if (e.key == "s") {
    signBehavior(e)
  }
  if (e.key == "%") {
    percentBehavior()
  }
  if (e.key == "Backspace"){
    e.preventDefault()
    input.value = input.value.slice(0, input.value.length-1)
  }
  if (e.key == "."){
    e.preventDefault()
    if (!input.value){
      input.value = "0."
    } else if (input.value.split("").includes(".")) {
      return
    } else {
      input.value += "."
    }
  }
})

document.addEventListener("keyup", (e) => {
  for (let i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].style.background = buttonColorDefault
  }
})

document.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("button")) {
    e.target.style.background = buttonColorPressed
    console.log(e.target.classList.contains("button"))
  }

  if (e.target.classList.contains("button")) {
    let key = e.target.id.slice(5)
    if (operationChars.includes(input.value)){
      input.value = ""
    }
    if (operationChars.includes(key) && !latched) {
      operatorKeyBehavior(key)
    }
    if ((key == "=" || key == "Enter") && !latched) {
      enterEqualsBehavior(key)
    }
    if (key == "AC") {
      deleteBehavior(e)
    }
    if (key == "sign") {
      signBehavior(e)
    }
    if (key == "%") {
      percentBehavior()
    }
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(Number(key))) {
      input.value += Number(key)
    }
  }
})
document.addEventListener("mouseup", (e) => {
  if (e.target.classList.contains("button")) {
    e.target.style.background = buttonColorDefault
  }
})

function evalEquation() {
  if (!latched) {
    equation.push(input.value)
  }
  lastOp = equation[1]
  lastInput = equation[2]
  input.value = calculate(equation)
  equationViewer.textContent = equation.join(" ") + " = " + answer
  latched = true
}

function operatorKeyBehavior(key) {
  if (input.value == "") {
    return
  }
  else {
    if (equation.length == 0) {
      equation.push(input.value)
      equation.push(key)
      console.log(equation)
      equationViewer.textContent = equation.join(" ")
      input.value = key
    }
    else if (equation.length == 2) {
      evalEquation()
    }
    if (latched) {
      equation.length = 0
      equation.push(answer)
      equation.push(key)
      input.value = ""
      latched = false
      return
    }
  }
}

function enterEqualsBehavior(key) {
  if (input.value == "") {
    return
  }
  else {
    if (equation.length == 0) {
      return
    }
    else if (equation.length == 2) {
      evalEquation()
    }
    else if (latched) {
      equation.length = 0
      equation.push(answer)
      equation.push(lastOp)
      equation.push(lastInput)
      evalEquation(equation)
    }
  }
}


function deleteBehavior(e) {
  if (keyboardUsed(e)) {
    buttonContainer[0].style.background = buttonColorPressed
  }
  input.value = ""
  equation.length = 0
  answer = 0
  lastInput = null
  lastOp = null
  latched = false
  equationViewer.textContent = ""
}

function signBehavior(e) {
  if (keyboardUsed(e)) {
    buttonContainer[1].style.background = buttonColorPressed
  }
  input.value = input.value * -1
}

function percentBehavior(e) {
  if (input.value == "") {
    return
  }
  else {
    let percentAnswer = input.value
    console.log(percentAnswer)
    input.value = percentAnswer * 0.01
  }
}

function keyboardUsed(e) {
  if (e.type == "keydown") {
    return true
  }
}


