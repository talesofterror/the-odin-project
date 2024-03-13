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
  if (permittedChars.slice(10, 14).includes(e.data)) {
    console.log(`key blocked: ${e.data}`)
    input.value = ""
  }
  if (e.data != permittedChars.filter((el) => el == e.data)
    // || (e.data == permittedChars.slice(10, 14).filter(el => el == e.data) && input.value == "")
    ) {
    // console.log(`key blocked: ${e.data}`)
    input.value = input.value.slice(0, input.value.length - 1)
  }
})

let permittedChars = "1234567890+-*/.".split('')
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

document.addEventListener("keydown", (e) => {
  if (permittedChars.slice(10, 14).includes(e.key)) {
    console.log(`key blocked: ${e.key}`)
    input.value = ""
  }

  for (let i = 0; i < buttonContainer.length; i++) {
    if (e.key == buttonContainer[i].id.slice(5)) {
      buttonContainer[i].style.background = buttonColorPressed

    }
    if (e.key == "Delete") {
      buttonContainer[0].style.background = buttonColorPressed
    }
    if (e.key == "s") {
      buttonContainer[1].style.background = buttonColorPressed
    }
  }
  console.log("keydown: " + e.key)
})

document.addEventListener("keyup", (e) => {
  for (let i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].style.background = buttonColorDefault
  }
})



function operate(op) {
  let opArr = op.split
  return Operators[opArr[1]](opArr[0], opArr[2])
}






