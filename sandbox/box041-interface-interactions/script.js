import { dropdownEffectDisplay, dropdownEffectVisibility } from './dropdownmenu.js'
import { carosel_Init, carosel_Elements} from './carosel.js'

let images = [
	"./images/elmo1.jpg",
	"./images/elmo2.jpg",
	"./images/elmo3.jpg",
	"./images/elmo4.jpg",
]

let carosel = carosel_Elements(images, document.getElementById("carosel-display"), document.getElementById("carosel-dots"))
carosel_Init(carosel, "carosel-dot", "carosel-dot-active")

document.getElementById("carosel-left").addEventListener("click", ()=>{
	carosel.prev()
})
document.getElementById("carosel-right").addEventListener("click", ()=>{
	carosel.next()
})

console.log(carosel.dotStyleActive)

dropdownEffectDisplay(document.getElementById("menu-button"), document.getElementById("menu-item-group"), "block")

let carosel_TimedRotation = () => {
	carosel.next()
}

setInterval(carosel_TimedRotation, 5000)





