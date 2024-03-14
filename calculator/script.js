
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

document.addEventListener("keydown", (e) => {
  for (let i = 0; i < buttonContainer.length; i++) {
    if (e.key == buttonContainer[i].id.slice(5)) {
      buttonContainer[i].style.background = buttonColorPressed
      if (operationChars.includes(e.key)) {
        // & After operator symbol entered: 
        // & Should display answer until new input is entered 
        if (equation.length == 0) {
          equation.push(Number(input.value), e.key)
          input.value = ""
        } else {
          equation.push(Number(input.value))
          input.value = calculate(equation)
          equation = equation.slice(equation.length)
          equation.push(Number(input.value), e.key)
          input.value = ""
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
  // console.log("keydown: " + e.key)
})

document.addEventListener("keyup", (e) => {
  for (let i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].style.background = buttonColorDefault
  }
})







