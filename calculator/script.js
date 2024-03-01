
// numbers regex: ^[0-9]+$

let input = document.getElementById("input")
window.onload = function () {
  input.focus()
}
document.addEventListener("click", () => input.focus())

let permittedChars = "1234567890+-*/.".split('')
document.addEventListener("keydown", (e) => {
  if (e.key == permittedChars.filter((el) => el == e.key)) {
    console.log(`permitted character pressed: ${e.key}`)
  }
})

input.addEventListener("input", (e) => {
  if (e.data != permittedChars.filter((el) => el == e.data)) {
    console.log(`key blocked: ${e.data}`)
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
