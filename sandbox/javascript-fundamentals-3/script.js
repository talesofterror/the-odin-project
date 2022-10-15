const para = document.createElement('p');

let contentContainer = document.querySelector("#content")
let targetElement

function buttonClick(id) {

    targetElement = contentContainer.querySelector(id)
    targetElement.classList.remove("hidden")

    for (i = 0; i <contentContainer.children.length; i++) {
        if (!contentContainer.children[i].classList.contains("hidden")) {
            contentContainer.children[i].classList.add("hidden")
        }
    } 

    targetElement.classList.remove("hidden")

    console.log(targetElement.id)
}

const inputAdd7 = document.getElementById('inputAdd7')
const inputMultiply = document.getElementById('inputAdd7')
const inputCapitlize = document.getElementById('inputAdd7')
const inputLastLetter = document.getElementById('inputAdd7')


para.textContent = "Type in a number and press Enter"

function add7(n) {
    if (isNaN(n) || n === '') {
        return "Not a number"
    } else {
        result = Number(n) + 7
        return result
    }
}

function multiply(n1, n2) {
    let result = n1 * n2
    return result
}

function capitalize(input) {
    result = input.toUpperCase()
    return result
}

function lastLetter(input) {
    stringify = input.toString()
    result = stringify.charAt(stringify.length - 1)
    return result
}



inputAdd7.addEventListener("change",
    () => para.textContent = `Result: ${add7(inputAdd7.value)}`)

const section = document.querySelector('section');

section.appendChild(para);