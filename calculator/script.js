

// & Consider keeping the equation array a constant length and 
// & assigning it's elements as needed



"use strict"


let buttonColorDefault = getComputedStyle(document.documentElement).getPropertyValue("--buttonDefault")
let buttonColorPressed = getComputedStyle(document.documentElement).getPropertyValue("--buttonPressed")

let displayChars = "1234567890.".split('')
let operationChars = "+-*/".split('')
let buttonContainer = [].slice.call(document.getElementById("button-container").children)

let input = document.getElementById("input")

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

*/


function operationKeyPressed() {

}
function enterEqualsPressed() {

}

document.addEventListener("keydown", (e) => {
  console.log("keydown: " + e.key)
  for (let i = 0; i < buttonContainer.length; i++) {
    if (e.key == buttonContainer[i].id.slice(5)) {
      buttonContainer[i].style.background = buttonColorPressed
    }
  }
  if (operationChars.contains(e.key)) {
    operationKeyPressed()
  }
  if (e.key == "Enter" || e.key == "=") {
    e.preventDefault()
    buttonContainer[buttonContainer.length - 1].style.background = buttonColorPressed
  }
  if (e.key == "Delete") {
    e.preventDefault()
    input.value = ""
    equation.length = 0
    buttonContainer[0].style.background = buttonColorPressed
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



