
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

function operationCalc() {
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
      operationCalc()
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
  // key.preventDefault()
  buttonContainer[buttonContainer.length - 1].style.background = buttonColorPressed
  if (input.value == "") {
    return
  }
  else {
    if (equation.length == 0) {
      return
    }
    else if (equation.length == 2) {
      operationCalc()
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


function deleteBehavior() {
  input.value = ""
  equation.length = 0
  answer = 0
  lastInput = null
  lastOp = null
  latched = false
  buttonContainer[0].style.background = buttonColorPressed
  equationViewer.textContent = ""
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
    operatorKeyBehavior(e.key)
  }
  if (e.key == "Enter" || e.key == "=") {
    enterEqualsBehavior(e.key)
  }
  if (e.key == "Delete") {
    deleteBehavior()
  }
  if (e.key == "s") {
    signBehavior()
  }
  if (e.key == "%") {
    percentBehavior()
  }
})

document.addEventListener("keyup", (e) => {
  for (let i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].style.background = buttonColorDefault
  }
})

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    let key = e.target.id.slice(5)
    if (operationChars.includes(key) && !latched) {
      operatorKeyBehavior(key)
    }
    if ((key == "=" || key == "Enter") && !latched) {
      enterEqualsBehavior(key)
    }
    if (key == "AC") {
      deleteBehavior()
    }
    if (key == "sign") {
      signBehavior()
    }
    if (key == "%") {
      percentBehavior()
    }
    if (Number(key) == NaN) {
      input.value = Number(key)
    }
    console.log(Number(key))
  }
})

function signBehavior() {
  input.value = input.value * -1
  buttonContainer[1].style.background = buttonColorPressed
}

function percentBehavior() {
  if (input.value == "") {
    return
  }
  else {
    let percentAnswer = input.value
    console.log(percentAnswer)
    input.value = percentAnswer * 0.01
  }
}


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



