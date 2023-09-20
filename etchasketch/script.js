const pixelContainer = document.querySelector(".pixel-container")
const fgColorPicker = document.querySelector(".fg")
const bgColorPicker = document.querySelector(".bg")
let pixels = []
let mousePosition = [0, 0]
const xCoord = document.createAttribute("x")
const yCoord = document.createAttribute("y")

let initBG = getComputedStyle(document.documentElement).getPropertyValue("--screenBG")
let initColor = getComputedStyle(document.documentElement).getPropertyValue("--deviceBG")
let screenCursor = getComputedStyle(document.documentElement).getPropertyValue("--screenCursor")

let controls = {
	color: {	
		fgValue: fgColorPicker.value,
		bgValue: bgColorPicker.value
		//background color change should preserve drawing
	},
	resolution: { 
		value: 50,
		elementUp: document.getElementById("up-arrow"),
		elementDown: document.getElementById("down-arrow"),
		elementText: document.getElementById("resolution-text"),
	},
	drawing: false,
	eraser: false,
	randomize:{ 
		element: document.querySelector(".randomize-toggle img"),
		value: false },
	clear: {
	// maybe this should be called "clear"
		element: document.getElementById("reset"),
		method: function (bgColor) {
			for (y = 0; y < pixels.length; y++) {
				for (x = 0; x < pixels[y].length; x++){
					colorCell(pixels[y][x].getAttribute("x"), pixels[y][x].getAttribute("y"), bgColor)
				}}}
	 }
}

createScreen(controls.resolution.value)
activateControls()

function activateControls () {
	// randomize element
	controls.randomize.element.addEventListener("mouseover", ()=> {
		controls.randomize.element.classList.add("icon-color-mousein")
		controls.randomize.element.classList.remove("icon-color-mouseout")
	})
	controls.randomize.element.addEventListener("mouseout", ()=> {
		if (controls.randomize.value) { return }
		else {
		controls.randomize.element.classList.add("icon-color-mouseout")
		controls.randomize.element.classList.remove("icon-color-mousein")
		}
	})
	controls.randomize.element.addEventListener("click", ()=> {
		if (!controls.randomize.value) {
			controls.randomize.value = true 
			controls.randomize.element.classList.add("icon-color-mousein")
			controls.randomize.element.classList.remove("icon-color-mouseout")
			controls.randomize.element.src = "assets/dice-color-icon.svg"
			document.documentElement.style.setProperty("--screenCursor", makeRandomColorString())
		} else { 
			controls.randomize.value = false 
			controls.randomize.element.classList.add("icon-color-mouseout")
			controls.randomize.element.classList.remove("icon-color-mousein")
			controls.randomize.element.src = "assets/dice-icon.svg"
			document.documentElement.style.setProperty("--screenCursor", controls.color.fgValue)
		}
	})
	// resolution elements
	controls.resolution.elementUp.addEventListener("click", () => {
		controls.resolution.value += 10
		createScreen(controls.resolution.value)
	})
	controls.resolution.elementDown.addEventListener("click", () => {
		controls.resolution.value -= 10
		createScreen(controls.resolution.value)
	})
	// reset element
	controls.clear.element.addEventListener("click", () => 
		controls.clear.method(controls.color.bgValue))
}

function colorCell(x, y, color) {
	pixels[y][x].style.backgroundColor = color
}

function map(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function map256To16 (color) { return map(color, 0, 15, 0, 255) }

function makeRandomColorValue () {
	let colorVal = Math.floor(Math.random() * 255)
	return colorVal
}
function makeRandomColorValue16 () {
	let colorVal = Math.floor(Math.random() * 16)
	return colorVal
}

function makeRandomColorString () {
	let r = map256To16(makeRandomColorValue16())
	let g = map256To16(makeRandomColorValue16())
	let b = map256To16(makeRandomColorValue16())
	return `rgb(${r}, ${g}, ${b})`
}

function createScreen(sizeX) {
	// Insert elements
	if (pixelContainer.firstElementChild) {
		Array.from(pixelContainer.children).forEach(element => element.remove())
		pixels.length = 0
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
	for (let i = 0; i < pixelContainer.children.length; i++) {
		let p = []
		for (let j = 0; j < pixelContainer.children[i].children.length; j++) {
			p.push(pixelContainer.children[i].children[j])
		}
		pixels.push(p)
	}
	// Add pixel listeners
	for (let y = 0; y < pixels.length; y++) {
		for (let x = 0; x < pixels[y].length; x++) {
			pixels[y][x].addEventListener("mousemove",
				(e) => {
					if (controls.drawing) {
						e.preventDefault()
						if (controls.eraser) {
							colorCell(mousePosition[0], mousePosition[1], controls.color.bgValue)
						} else if (controls.randomize.value) { 
							colorCell(mousePosition[0], mousePosition[1], makeRandomColorString())
						} else { colorCell(mousePosition[0], mousePosition[1], controls.color.fgValue)
						}
					}
				})
		}
	}
	// Add screen listeners
	// ** if I click inside the pixel container and then drag the mouse
	// ** out of the container and let go of the mouse colorcell() is
	// ** still being called when I move my mouse back in the container
	pixelContainer.addEventListener("mouseover",
	(e) => {
		if (controls.randomize.value) {
			document.documentElement.style.setProperty("--screenCursor", makeRandomColorString())
		}
		mousePosition[0] = e.target.getAttribute("x")
		mousePosition[1] = e.target.getAttribute("y")
	})
	pixelContainer.addEventListener("mousedown",
		(e) => {
			controls.drawing = true
			console.log("drawing == " + controls.drawing)
			console.log("button pressed == " + e.button)
			console.log(e.target)
			console.log("x = " + mousePosition[0] + "; y = " + mousePosition[1])
			if (e.button == 0) { 
				if (controls.randomize.value) {
					screenCursor = () => makeRandomColorString()
				}
				controls.eraser = false
				colorCell(mousePosition[0], mousePosition[1], controls.color.fgValue)
			} else if (e.button == 2) {
				controls.eraser = true
				colorCell(mousePosition[0], mousePosition[1], controls.color.bgValue)
				console.log("erasing")
			}
		})
	document.querySelector("body").addEventListener("mouseup",
		() => {
			controls.drawing = false
			console.log("drawing == " + controls.drawing)
		})
	fgColorPicker.addEventListener("change", () => {
		console.log(fgColorPicker.value)
		controls.color.fgValue = fgColorPicker.value
		document.documentElement.style.setProperty("--screenCursor", controls.color.fgValue)

	})
	bgColorPicker.addEventListener("change", () => {
		console.log(bgColorPicker.value)
		controls.color.bgValue = bgColorPicker.value
		for (let y = 0; y < pixels.length; y++) {
			for (let x = 0; x < pixels[y].length; x++) {
				pixels[y][x].style.backgroundColor = controls.color.bgValue
			}
		}
	})
	// resolution text value
	controls.resolution.elementText.textContent = sizeX
}