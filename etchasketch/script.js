let pixelContainer = document.querySelector(".pixel-container")
let fgColorPicker = document.querySelector(".fg")
let bgColorPicker = document.querySelector(".bg")
let pixels = []
const xCoord = document.createAttribute("x")
const yCoord = document.createAttribute("y")

let initBG = getComputedStyle(document.documentElement).getPropertyValue("--screenBG")
let initColor = getComputedStyle(document.documentElement).getPropertyValue("--deviceBG")
let screenCursor = getComputedStyle(document.documentElement).getPropertyValue("--deviceBG")
fgColorPicker.value = initColor
bgColorPicker.value = initBG

let controls = {
	color: 
		{	fgValue: fgColorPicker.value,
			bgValue: bgColorPicker.value },
	resolution: 
		{	elementUp: document.getElementById("up-arrow"),
			elementDown: document.getElementById("up-arrow"),
		 	value: 100 },
	drawing: false,
	eraser: 
		{ element: "",
			value: false },
	randomize: 
		{ element: "",
			value: false },
	}
	
createScreen(controls.resolution.value)
document.documentElement.style.setProperty("--screenCursor", controls.color.fgValue)

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
	for (let i = 0; i < pixelContainer.children.length; i++){
		let p = []
		for (let j = 0; j < pixelContainer.children[i].children.length; j++){
			p.push(pixelContainer.children[i].children[j])
		}
		pixels.push(p)
	}
	// Add pixel listeners
	for (let y = 0; y < pixels.length; y++){
		for (let x = 0; x < pixels[y].length; x++){
			pixels[y][x].addEventListener("mousemove", 
				(e)=> {
					if (controls.drawing){
						e.preventDefault()
						controls.eraser.value ? 
						colorCell(e.target.getAttribute("x"), e.target.getAttribute("y"), controls.color.bgValue)
						: colorCell(e.target.getAttribute("x"), e.target.getAttribute("y"), controls.color.fgValue)
					}
				})
		}
	}
	// Add screen listeners
	// ** if I click inside the pixel container and then drag the mouse
	// ** out of the container and let go of the mouse colorcell() is
	// ** still being called when I move my mouse back in the container
	pixelContainer.addEventListener("mousedown", 
		(e)=>{
			controls.drawing = true
			console.log("drawing == " + controls.drawing)
			console.log("button pressed == " + e.button)
			console.log(e.target)
			if (e.button == 0) {
				controls.eraser.value = false
				colorCell(e.target.getAttribute("x"), e.target.getAttribute("y"), controls.color.fgValue) 
			} else if (e.button == 2) {
				controls.eraser.value = true
				colorCell(e.target.getAttribute("x"), e.target.getAttribute("y"), controls.color.bgValue) 
				console.log("erasing")
			}
		})
	document.querySelector("body").addEventListener("mouseup", 
		()=>{
			controls.drawing = false
			console.log("drawing == " + controls.drawing)
		})
	fgColorPicker.addEventListener("change", ()=>{
		console.log(fgColorPicker.value)
		controls.color.fgValue = fgColorPicker.value
	})
	bgColorPicker.addEventListener("change", ()=>{
		console.log(bgColorPicker.value)
		controls.color.bgValue = bgColorPicker.value
		for (let y = 0; y < pixels.length; y++){
			for (let x = 0; x < pixels[y].length; x++){
				pixels[y][x].style.backgroundColor = controls.color.bgValue
			}
		}
	})
}

function colorCell (x, y, color) {	
	pixelContainer.children[y].children[x].style.backgroundColor = color
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

function map_range(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

let map16Colors = (color) => map_range(color, 0, 255, 0, 16)
