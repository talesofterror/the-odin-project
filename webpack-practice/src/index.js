import {greeting} from "./greeting.js"
import "./style.css"
import gif4 from "./assets/4.gif"

console.log(greeting)

const image = document.createElement("img")
const imgContainer = document.createElement("div")
image.src = gif4
imgContainer.appendChild(image)
document.body.appendChild(imgContainer)
