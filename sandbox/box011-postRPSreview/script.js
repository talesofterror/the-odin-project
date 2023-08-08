let mainNodeList = document.querySelectorAll("main")
let mainElement = document.querySelector("main")

// mainNodeList.forEach(element => console.dir(element))

for (x = 0; x < 51; x++) {
        
        mainElement.appendChild(document.createElement("div"))
        let codePointString = `0x1F60${x}`
        // mainElement.lastElementChild.textContent = 
        //     //`${String.fromCodePoint(codePointString)} ` + (x+1)
        //     x+1
}

mainElement.childNodes.forEach(element => console.log(element))




















/// GRAVEYARD


// // CODE BELOW ONLY ADDS A SINGLE ELEMENT TO THE END OF THE CHILD LIST
   // ~ it was because the nodelist doesn't have any children to forEach
   // through. Duh.

// mainNodeList.children.forEach(element => 
//     {
//         element.appendChild(document.createElement("div"))
//         let codePointString = `0x1F60${i}`
//         element.lastElementChild.textContent = 
//         `${String.fromCodePoint(codePointString)} ` + (i+1)
//     }
// )
