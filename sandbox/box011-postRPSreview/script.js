let pixelContainer = document.querySelector(".pixel-container")

for (x = 0; x < 20; x++) {
	pixelContainer.appendChild(document.createElement("div"))
	pixelContainer.lastChild.innerHTML = "&nbsp;"
	// pixelContainer.lastChild.style.height = pixelContainer.lastChild.offsetWidth +"px"
}

// for (i = 0; i < 51; i++) {
// 	mainElement.children[i].classList.add("pixel") 
// }

let mainChildren = Array.from(pixelContainer.children)

mainChildren.forEach(element => element.classList.add("pixel"))	
	// pixelContainer.childNodes.forEach(element => console.log(element))

	
function Shape(size, shape) {
	return {
		size: size,
		shape: shape, 
		changeSize: function (newSize) {
			this.size = newSize
		}
	}
}

let fishes = {
	blue: "A blue fish, nothing too special about it. It shimmers when you rotate it."
	,
	red: "A red fish. It looks like cooked shrimp, but it is a fresh fish."
	,
	yellow: "A yellow fish. Not quite gold."
	, 
	cream: "A cream-colored fish. It's got love red and yellow dappling."
}

let controls = {
	
	color: "#000" ,
	size: 100 ,
	randomColor: function () {} ,
		// randomize options: 
		// color, saturation, value
		// use hsv
	
}

function map_range(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

let map16Colors = (color) => map_range(color, 0, 255, 0, 16)
















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