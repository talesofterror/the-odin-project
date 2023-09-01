
let pixelContainer = document.querySelector(".pixel-container")
let root = document.querySelector("root")
let pixelsArray = []
const xCoord = document.createAttribute("x")
const yCoord = document.createAttribute("x")

let screenBG = getComputedStyle(document.documentElement).getPropertyValue("--screenBG")

let controls = {
	color: { element: "", fgValue: "#0f8", bgValue: screenBG },
	resolution: { element: "", value: 50},
	drawing: false,
	eraser: { element: "", value: false },
	randomize: { element: "", value: false },
		// ? randomize options: 
		// 		color, saturation, value
		// 		use hsv?
	}
	
	createScreen(controls.resolution.value)
	function pixelsFunction (x, y) {return pixelContainer.children[y].children[x]}
	
	function createScreen(sizeX) {
		// Insert elements
	if (pixelContainer.firstElementChild){
		Array.from(pixelContainer.children).forEach(element => element.remove())
		createScreen(sizeX)
	} else {
		for (let y = 0; y < sizeX / 2; y++) {
			pixelContainer.appendChild(document.createElement("div"))
			pixelContainer.lastChild.classList.add("pixel-row")
			for (let x = 0; x < sizeX; x++) {
				pixelContainer.lastChild.appendChild(document.createElement("div"))
				pixelContainer.lastChild.lastChild.classList.add("pixel")
				pixelContainer.lastChild.lastChild.setAttribute("x", x)
				pixelContainer.lastChild.lastChild.setAttribute("y", y)
			}
		}
	}
	// Create pixel array
	// ** fast mouse movements cause skipped pixels
	for (let i = 0; i < pixelContainer.children.length; i++){
		let p = []
		for (let j = 0; j < pixelContainer.children[i].children.length; j++){
			p.push(pixelContainer.children[i].children[j])
		}
		pixelsArray.push(p)
	}
	// Add pixel listeners
	for (let y = 0; y < pixelsArray.length; y++){
		for (let x = 0; x < pixelsArray[y].length; x++){
			pixelsArray[y][x].addEventListener("mousemove", 
				(e)=> {
					if (controls.drawing){
						e.preventDefault()
						colorCell(e.target.getAttribute("x"), e.target.getAttribute("y"))
					}
				})
		}
	}
	// Add screen listeners
	// ** currently the mousedown event remains triggered if i exit the pixelcontainer
	// ** could wrap the whole thing in a mouseover and/or mouseout event?
	pixelContainer.addEventListener("mousedown", 
		(e)=>{
			controls.drawing = true
			console.log("drawing == " + controls.drawing)
		})
	pixelContainer.addEventListener("mouseup", 
		()=>{
			controls.drawing = false
			console.log("drawing == " + controls.drawing)
		})
}

function colorCell (x, y) {
	if (controls.eraser.value == true) {
	pixelContainer.children[y].children[x].style.backgroundColor = screenBG
	} else {
	pixelContainer.children[y].children[x].style.backgroundColor = controls.color.fgValue
	}
}

function distance (x1, y1, x2, y2) {
	return Math.ceil(Math.sqrt(Math.pow(x2 - x1, 2) + 
					Math.pow(y2 - y1, 2) * 1.0))
}

function drawLine (x1, y1, x2, y2) {
	let dotX
	let dotY
	for (i = 0; i < distance(x1, y1, x2, y2); i++) {
		/*
		For longer lines either x2 or y2 is reached too early, resulting
		in curved lines. 
		Maybe: 
			if (dotX < x2 / 3) { etc }
			else if ()
		*/
		if (x1 < x2 && dotX != x2) {
			//increment x
			dotX = x1 + i
		} else if (x1 == x2) {
			dotX = x2
		} else if (x1 > x2 && dotX != x2) {
			//decrement x
			dotX = x1 - i
		}
		if (y1 < y2 && dotY != y2) {
			//increment x
			dotY = y1 + i
		} else if (y1 == y2 || dotY == y2) {
			dotY = y2
		} else if (y1 > y2 && dotY != y2) {
			//decrement x
			dotY = y1 - i
		}

		colorCell(dotX, dotY)
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