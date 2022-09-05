const paraAdd7 = document.createElement('p');



const idAdd7 = document.getElementById('buttonAdd7')
const idMultiply = document.getElementById('buttonMultiply')
const idCapitalize = document.getElementById('buttonCapitalize')
const ifLastLetter = document.getElementById('buttonLastLetter')

let activeElement = document.querySelector("#content")

function buttonClick() {
    const buttonAdd7 = document.getElementById('buttonAdd7')
    const buttonMultiply = document.getElementById('buttonMultiply')
    const buttonCapitalize = document.getElementById('buttonCapitalize')
    const buttonLastLetter = document.getElementById('buttonLastLetter')
    
    // let targetElement = document.getElementById(id1).classList.remove("hidden")

    // for (i = 0; i <=activeElement.children.length; i++) {
    //     if (activeElement.id === id1){ return }
    //     else { activeElement.children[i].classList.add("hidden") }
    // }

    console.log(this.id)
}

const inputAdd7 = document.getElementById('inputAdd7')
const inputMultiply = document.getElementById('inputAdd7')
const inputCapitlize = document.getElementById('inputAdd7')
const inputLastLetter = document.getElementById('inputAdd7')


paraAdd7.textContent = "Type in a number and press Enter"

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

/*
If the element is currently active
then add class "hidden"
and remove hidden from target ID. 
*/

// let promptTest = prompt("Enter a Number")
// console.log(promptTest)



inputAdd7.addEventListener("change",
    () => paraAdd7.textContent = `Result: ${add7(input.value)}`)

const section = document.querySelector('section');

section.appendChild(paraAdd7);