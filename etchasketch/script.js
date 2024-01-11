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

let knobInterval

let controls = {
  color: {
    fgValue: fgColorPicker.value,
    bgValue: bgColorPicker.value
    //background color change should preserve drawing
  },
  resolution: {
    value: 50,
    visible: true,
    elementToggleGrid: document.getElementById("grid-toggle"),
    elementUp: document.getElementById("up-arrow"),
    elementDown: document.getElementById("down-arrow"),
    elementText: document.getElementById("resolution-text"),
  },
  drawing: false,
  eraser: false,
  randomize: {
    element: document.querySelector(".randomize-toggle img"),
    value: false
  },
  clear: {
    element: document.getElementById("reset-button"),
    method: function (bgColor) {
      for (y = 0; y < pixels.length; y++) {
        for (x = 0; x < pixels[y].length; x++) {
          colorCell(pixels[y][x].getAttribute("x"), pixels[y][x].getAttribute("y"), bgColor)
          pixels[y][x].classList.remove("drawn")
        }
      }
    }
  },
  info: {
    button: document.getElementById("info-button"),
    element: document.getElementById("info-text"),
    value: false
  }
}

createScreen(controls.resolution.value)
activateControls()

function activateControls() {

    // add color picker listeners

    fgColorPicker.addEventListener("change", () => {
      controls.color.fgValue = fgColorPicker.value
      document.documentElement.style.setProperty("--screenCursor", controls.color.fgValue)
    })
    bgColorPicker.addEventListener("change", () => {
      controls.color.bgValue = bgColorPicker.value
      pixelContainer.style.backgroundColor = bgColorPicker.value
      for (let y = 0; y < pixels.length; y++) {
        for (let x = 0; x < pixels[y].length; x++) {
          if (pixels[y][x].classList.contains("drawn")) {
            continue
          } else {
            pixels[y][x].style.backgroundColor = controls.color.bgValue
          }
        }
      }
    })

  // randomize element

  controls.randomize.element.addEventListener("mouseover", () => {
    controls.randomize.element.classList.add("icon-color-mousein")
    controls.randomize.element.classList.remove("icon-color-mouseout")
  })
  controls.randomize.element.addEventListener("mouseout", () => {
    if (controls.randomize.value) { return }
    else {
      controls.randomize.element.classList.add("icon-color-mouseout")
      controls.randomize.element.classList.remove("icon-color-mousein")
    }
  })
  controls.randomize.element.addEventListener("click", () => {
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
    if (controls.resolution.value == 100) {
      return
    } else {
      controls.resolution.value += 10
      createScreen(controls.resolution.value)
    }
  })
  controls.resolution.elementDown.addEventListener("click", () => {
    if (controls.resolution.value == 50) {
      return
    } else {
      controls.resolution.value -= 10
      createScreen(controls.resolution.value)
    }
  })
  controls.resolution.elementToggleGrid.addEventListener("click", () => {
    if (controls.resolution.visible) {
      for (y = 0; y < pixels.length; y++) {
        for (x = 0; x < pixels[y].length; x++) {
          pixels[y][x].style.borderWidth = "0px"
        }
      }
      controls.resolution.visible = false
    } else {
      for (y = 0; y < pixels.length; y++) {
        for (x = 0; x < pixels[y].length; x++) {
          pixels[y][x].style.borderWidth = "1px"
        }
      }
      controls.resolution.visible = true
    }
  })

  // reset element

  controls.clear.element.addEventListener("click", () =>
    controls.clear.method(controls.color.bgValue))

  // info button

  controls.info.button.addEventListener("click", () => {
    if (controls.info.value == false) {
      controls.info.element.style.visibility = "visible"
      controls.info.value = true
    } else {
      controls.info.element.style.visibility = "hidden"
      controls.info.value = false

    }
  })

  // add knob reactivity

  let i = 0
  let currentRotation = 0
  let tau = Math.PI * 2
  pixelContainer.addEventListener("mouseover", (e) => {
    if (e.currentTarget != pixelContainer){
      return
    }
    console.log(e.target)
    knobInterval = setInterval(() => {
      console.log("interval called")
      if (i < tau) {
        let knobs = [document.querySelector(".left-knob"), document.querySelector(".right-knob")]
        currentRotation += Math.sin(i) * 2
        i += 0.25
        knobs[0].style.transform = `rotate(${currentRotation}deg)` // string[7]
        knobs[1].style.transform = `rotate(${-currentRotation}deg)` // string[7]
      }
      if (i > tau) {
        i = 0
      }
    }, 30)
  })
  pixelContainer.addEventListener("mouseout", (e) => {
    if (e.currentTarget != pixelContainer){
      return
    }
    // console.log("mouse exited pixel container")
    clearInterval(knobInterval)
  })
}

function colorCell(x, y, color) {
  pixels[y][x].style.backgroundColor = color
}

function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function map256To16(color) { return map(color, 0, 15, 0, 255) }

function makeRandomColorValue() {
  let colorVal = Math.floor(Math.random() * 255)
  return colorVal
}
function makeRandomColorValue16() {
  let colorVal = Math.floor(Math.random() * 16)
  return colorVal
}

function makeRandomColorString() {
  let r = map256To16(makeRandomColorValue16())
  let g = map256To16(makeRandomColorValue16())
  let b = map256To16(makeRandomColorValue16())
  return `rgb(${r}, ${g}, ${b})`
}

function tooltipHover(event, divid) {
  let left = event.clientX + 15 + "px";
  let right = event.clientY + "px";
  let div = document.getElementById(divid)
  div.style.left = left
  div.style.right = right
  div.style.visibility = "visible";
}

function tooltipOff(divid) {
  let div = document.getElementById(divid)
  div.style.visibility = "hidden"
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
      pixelContainer.children[i].children[j].style.backgroundColor = controls.color.bgValue
      p.push(pixelContainer.children[i].children[j])
    }
    pixels.push(p)
  }

  // Add screen listeners
  // ** if I click inside the pixel container and then drag the mouse
  // ** out of the container and let go of the mouse colorcell() is
  // ** still being called when I move my mouse back in the container

  for (let y = 0; y < pixels.length; y++) {
    for (let x = 0; x < pixels[y].length; x++) {
      pixels[y][x].addEventListener("mousemove",
        (e) => {
          e.stopPropagation()
          if (controls.drawing) {
            e.preventDefault()
            if (controls.eraser) {
              colorCell(mousePosition[0], mousePosition[1], controls.color.bgValue)
            } else if (controls.randomize.value) {
              e.target.classList.add("drawn")
              colorCell(mousePosition[0], mousePosition[1], makeRandomColorString())
            } else {
              e.target.classList.add("drawn")
              colorCell(mousePosition[0], mousePosition[1], controls.color.fgValue)
            }
          }
        })
      pixels[y][x].addEventListener("mouseover",
        (e) => {
          // e.stopPropagation()
          if (controls.randomize.value) {
            document.documentElement.style.setProperty("--screenCursor", makeRandomColorString())
          }
          mousePosition[0] = e.target.getAttribute("x")
          mousePosition[1] = e.target.getAttribute("y")
        })
      pixels[y][x].addEventListener("mousedown",
        (e) => {
          controls.drawing = true
          if (e.button == 0) {
            e.preventDefault()
            if (controls.randomize.value) {
              screenCursor = () => makeRandomColorString()
            }
            controls.eraser = false
            colorCell(mousePosition[0], mousePosition[1], controls.color.fgValue)
            e.target.classList.add("drawn")
            console.log(pixels[mousePosition[0]][mousePosition[1]].classList)
          } else if (e.button == 2) {
            controls.eraser = true
            e.target.classList.remove("drawn")
            if (e.target.classList.contains("drawn")) {
              colorCell(mousePosition[0], mousePosition[1], controls.color.bgValue)
            }
          }
        })
    }
  }

  document.querySelector("body").addEventListener("mouseup",
    () => {
      controls.drawing = false
    })

  // resolution text value

  controls.resolution.elementText.textContent = sizeX
}