
let input = document.getElementById("input")
window.onload = function () {
  input.focus()
}
document.addEventListener("click", () => input.focus())

let permittedChars = "1234567890+-*/.".split('')
let buttonContainer = [].slice.call(document.getElementById("button-container").children)

document.addEventListener("keydown", (e) => {
  for (let i = 0; i < buttonContainer.length; i++) {
    if (e.key == buttonContainer[i].id.slice(5)){
      buttonContainer[i].style.background = "#ff6633"
    }
  }
})
document.addEventListener("keyup", (e) => {
  for (let i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].style.background = "#ffaa92"
  }
})

input.addEventListener("input", (e) => {
  if (e.data != permittedChars.filter((el) => el == e.data)) {
    // console.log(`key blocked: ${e.data}`)
    input.value = input.value.slice(0, input.value.length-1)
  }
})


function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return b == 0 ? 0 : a / b
}
