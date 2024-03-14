// & filter for permitted chars 9 to 14
// & clear input value and push to equation array
// & then wait for next number input
// & and either wait for another operator sign or equals
// & if (e.key == )


let buttonColorDefault = getComputedStyle(document.documentElement).getPropertyValue("--buttonDefault")
let buttonColorPressed = getComputedStyle(document.documentElement).getPropertyValue("--buttonPressed")

let input = document.getElementById("input")
window.onload = function () {
  input.focus()
}
document.addEventListener("click", () => input.focus())

input.addEventListener("input", (e) => {
  // if (permittedChars.slice(10, 14).includes(e.data)) {
  //   // console.log(`key blocked: ${e.data}`)
  //   input.value = ""
  // }
  if (e.data != permittedChars.filter((el) => el == e.data)
    // || (e.data == permittedChars.slice(10, 14).filter(el => el == e.data) && input.value == "")
    ) {
    // console.log(`key blocked: ${e.data}`)
    input.value = input.value.slice(0, input.value.length - 1)
  }
})

let permittedChars = "1234567890.".split('')
let operationChars = "+-*/".split('')
let buttonContainer = [].slice.call(document.getElementById("button-container").children)

function Operators() {
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

let ops = new Operators()

let equation = []

function operate(eq) {
  let opArr = eq.split
  return ops[eq[1]](eq[0], eq[2])
}

document.addEventListener("keydown", (e) => {
  for (let i = 0; i < buttonContainer.length; i++) {
    if (e.key == buttonContainer[i].id.slice(5)) {
      buttonContainer[i].style.background = buttonColorPressed
      if (operationChars.includes(e.key)){
        if (equation.length == 0) {
          equation.push(Number(input.value))
          equation.push(e.key)
          console.table("equation, no input: " + equation)
        } else {
          equation.push(Number(input.value))
          input.value = operate(equation)
          // equation = equation.slice(2)
          // console.table("equation, after split: " + equation)
          // equation.push(input.value)
          // equation.push(e.key)
          // console.table("equation, after push: " + equation)
        }
      } 
    }
    if (e.key == "Enter") {
      e.preventDefault()
      buttonContainer[buttonContainer.length-1].style.background = buttonColorPressed
      if (equation.length == 2 && input.value != "") {

      }
    }
    if (e.key == "Delete") {
      e.preventDefault()
      input.value = ""
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







