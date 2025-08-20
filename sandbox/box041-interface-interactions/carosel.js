export let images = [
	"./images/elmo1.jpg",
	"./images/elmo2.jpg",
	"./images/elmo3.jpg",
	"./images/elmo4.jpg",
]

export function carosel_ImageElements (sourceArray) {
	let array = []
	for (let image of sourceArray) {
		let imgElement = document.createElement("img")
		let imgContainer = document.createElement("div")
		imgElement.src = image
		imgContainer.append(imgElement)
		array.push(imgContainer)
	}
	return array
}

export function carosel_Dots (containerElement, displayElement, defaultClass, activeClass) {
	let elementArray = carosel_ImageElements(images)

	console.log(elementArray)
	for (let image of elementArray) {
		let dotElement = document.createElement("div")
		dotElement.classList.add(defaultClass)
		dotElement.addEventListener("click", ()=> {
			displayElement.children[0].remove()
			displayElement.append(image)
		})
		containerElement.append(dotElement)
	}
}

export function carosel_Next () {

}

export function carosel_Prev () {

}

export function carosel_Dot () {

}
