let pixelContainer = document.querySelector(".pixel-container")

for (x = 0; x < 100; x++) {
	pixelContainer.appendChild(document.createElement("div"))
	pixelContainer.lastChild.innerHTML = "&nbsp;"
}

// for (i = 0; i < 51; i++) {
// 	mainElement.children[i].classList.add("pixel") 
// }

let mainChildren = Array.from(pixelContainer.children)

mainChildren.forEach(element => element.classList.add("pixel"))	
	pixelContainer.childNodes.forEach(element => console.log(element))

	
function Shape(size, shape) {
	return {
		size: size,
		shape: shape, 
		changeSize: function (newSize) {
			this.size = newSize
		}
	}
}
















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


// for (x = 0; x < 51; x++) {
// 	mainElement.appendChild(document.createElement("div"))
// 	let codePointString = `0x1F60${x}`
// 	mainElement.lastElementChild.textContent = 
// 	    `${String.fromCodePoint(codePointString)} ` + (x+1)
// 	    x+1
// }


// let mainNodeList = document.querySelectorAll("main")