const paraAdd7 = document.createElement('p');
const input = document.querySelectorAll(".input")[0]

paraAdd7.textContent = "Enter a number"

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

console.log(multiply(5, 5))

function capitalize(input) {
    result = input.toUpperCase()
    return result
}

function lastLetter (input) {
    stringify = input.toString()
    result = stringify.charAt(stringify.length - 1)
    return result
}

let promptTest = prompt("Enter a Number")
console.log(promptTest)


input.addEventListener("change", 
    () => paraAdd7.textContent = `Result: ${add7(input.value)}`)

const section = document.querySelector('section');

section.appendChild(paraAdd7);

