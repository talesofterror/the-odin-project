let pixelContainer = document.querySelector(".pixel-container")
let root = document.querySelector("root")

let controls = {
	color: "#000",
	resolution: 50,
	eraser: false,
	randomize: false,
		// ? randomize options: 
		// 		color, saturation, value
		// 		use hsv?
}

/*

Things that need to happen: 

- ui
	* rolling smiley dials
	* color picker & icon
	* resolution picker & icon
		- drop down? up and down arrows? 
	* eraser icon 
		- on/off variant
	* randomize icon 
		- on/off variant
		
- controls object
	- controls.color 
	- controls.resolution
	- controls.eraser
	- controls.randomize

- functions 
	* rolling smileys
	* color picker
		- pop-up color picker
		- changes pixel:hover 
	* resolution picker
		- already written
	* eraser 
		- returns controls.color to base color (--screenBG)
	* randomize 
		- fisher-yates algo 
		- discreet values -- rgb, hsv, or hex?
		- written below

*/

let sizeX = 50
for (let y= 0; y < sizeX / 2; y++) {
	pixelContainer.appendChild(document.createElement("div"))
	pixelContainer.lastChild.classList.add("pixel-row")
		for (x = 0; x < sizeX; x++) {
			pixelContainer.lastChild.appendChild(document.createElement("div"))
			pixelContainer.lastChild.lastChild.classList.add("pixel")
			// pixelContainer.lastChild.lastChild.innerHTML = "&nbsp;"
		}
}

function randomize(values) {

	let v = values

	for (i = v.length - 1; i > 0; i --) {
		let j = Math.floor(Math.random() * (i + 1))
		let k  = v[i]
		v[i] = v[j]
		v[j] = k
	}

	return v
}

let mainChildren = Array.from(pixelContainer.children) // x ?

function Shape(resolution, shape) {
	return {
		resolution: resolution,
		shape: shape, 
		changeSize: function (newSize) {
			this.resolution = newSize
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
	cream: "A cream-colored fish. It's got lovely red and yellow dappling."
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