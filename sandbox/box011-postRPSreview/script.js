let mainNodeList = document.querySelectorAll("main")
let mainElement = document.querySelector("main")

mainNodeList.forEach(element => console.dir(element))

for (i = 0; i < 10; i++) {
    mainElement.appendChild(document.createElement("div"))
    let codePointString = `0x1F60${i}`
    mainElement.lastElementChild.textContent = 
        `${String.fromCodePoint(codePointString)} ` + (i+1)
}

// CODE BELOW ONLY ADDS A SINGLE ELEMENT TO THE END OF THE CHILD LIST
//
// mainNodeList.forEach(element => 
//     {
//         element.appendChild(document.createElement("div"))
//         mainElement.lastElementChild.textContent = `${String.fromCodePoint(0x1F600)}`
//         mainElement.lastElementChild.style.border = "1px solid red"
//     }
// )

mainElement.childNodes.forEach(element => console.log(element))