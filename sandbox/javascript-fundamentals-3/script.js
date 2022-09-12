const inputAdd7 = document.getElementById('inputAdd7')
const inputMultiply = document.getElementById('inputMultiply')
const inputMultiply2 = document.getElementById('inputMultiply2')
const inputCapitalize = document.getElementById('inputCapitalize')
const inputLastLetter = document.getElementById('inputLastLetter')

let para = document.createElement('p');

let contentContainer = document.querySelector("#content")
let targetElement

let section = () => {
	for(i = 0; i < contentContainer.children.length; i++) {
		if (!contentContainer.children[i].classList.contains("hidden")) {
			return contentContainer.children[i]
		}
	}
}

section().appendChild(para);

function buttonClick(id) {

    targetElement = contentContainer.querySelector(id)
    
    for (i = 0; i <contentContainer.children.length; i++) {
        if (!contentContainer.children[i].classList.contains("hidden")) {
            contentContainer.children[i].classList.add("hidden")
            targetElement.appendChild(para)
        }
    } 

    targetElement.classList.remove("hidden")

    switch (targetElement.id) {
        case "idAdd7": 
            para.textContent = "Type in a number and press Enter"
            break;
        case "idMultiply": 
            para.textContent = "Type a number in each field and press Enter"
            break;
        case "idCapitalize": 
            para.textContent = "Type in a string to return the same string in all caps"
            break;
        case "idLastLetter": 
            para.textContent = "Type in a string to return the last letter of the string"
            break;
    }

    console.log(targetElement.id)
}

para.textContent = "Type in a number and press Enter"

inputAdd7.addEventListener("change",
    () => para.textContent = `Result: ${add7(inputAdd7.value)}`)

inputMultiply2.addEventListener("change", 
	()=> para.textContent = `Result: ${multiply(inputMultiply.value, inputMultiply2.value)}`)
inputMultiply.addEventListener("change", 
	()=> para.textContent = `Result: ${multiply(inputMultiply.value, inputMultiply2.value)}`)

inputCapitalize.addEventListener("change", 
	()=> para.textContent = `Result: ${capitalize(inputCapitalize.value)}`)

inputLastLetter.addEventListener("change", 
	()=> para.textContent = `Result: ${lastLetter(inputLastLetter.value)}`)


function add7(n) {
    if (isNaN(n) || n === '') {
        return "Not a number"
    } else {
        result = Number(n) + 7
        return result
    }
}

function multiply(n1, n2) {
    let result = Number(n1) * Number(n2)
    return result
}

function capitalize(input) {
    if (Number(input) != NaN){
        return "That is not a string"
    } else {
    let result = input.toUpperCase()
    return result
    } 
}

function lastLetter(input) {
    if (Number(input) != NaN){
        return "That is not a string"
    } else {
    stringify = input.toString()
    result = stringify.charAt(stringify.length - 1)
    return result
    }
}






