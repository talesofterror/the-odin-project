// Create an carosel object
export function carosel_Elements (sourceArray, displayElement, dotsContainer, defaultIndex = 0) {
	let imageObject = {
		sources: sourceArray,
		imgElements: [],
		displayElement: displayElement,
		dotsContainer: dotsContainer,
		dots: [],
		activeIndex: defaultIndex
	}
	for (let image of sourceArray) {
		let imgElement = document.createElement("img")
		let imgContainer = document.createElement("div")
		imgElement.src = image
		imgContainer.append(imgElement)
		imageObject.imgElements.push(imgContainer)
	}
	for (let element of imageObject.imgElements) {
		let dotElement = document.createElement("div")
		imageObject.dots.push(dotElement)
	}
	return imageObject
}

// Initialize the carosel display
// Populate dot container
// Add dot styles
// Prev/next functions
export function carosel_Init (carosel, dotStyleDefault, dotStyleActive) {
	let initObject = {
		dotStyleActive: dotStyleActive,
		dotStyleDefault: dotStyleDefault,
		setDotsStyle: function () {
			for (let i = 0; i < this.dots.length; i++) {
				if (i == this.activeIndex) {
					this.dots[i].classList.replace(dotStyleDefault, dotStyleActive)
				} else {
					this.dots[i].classList.replace(dotStyleActive, dotStyleDefault)
				}
			}
		},
		next: function () {
			this.displayElement.children[0].remove()
			if (this.activeIndex+1>this.imgElements.length-1) {
				this.activeIndex = 0
			} else {
				this.activeIndex++
			}
			this.displayElement.append(this.imgElements[this.activeIndex])
			this.setDotsStyle()
		},
		prev: function () {
			this.displayElement.children[0].remove()
			if (this.activeIndex-1<0) {
				this.activeIndex = this.imgElements.length-1
			} else {
				this.activeIndex--
			}
			this.displayElement.append(this.imgElements[this.activeIndex])
			this.setDotsStyle()
		}
	}
	Object.assign(carosel, initObject)
	carosel.displayElement.append(carosel.imgElements[carosel.activeIndex])
	for (let dot = 0; dot < carosel.dots.length; dot++) {
		carosel.dots[dot].classList.add(dotStyleDefault)
		carosel.dots[dot].addEventListener("click", ()=> {
			carosel.displayElement.children[0].remove()
			carosel.displayElement.append(carosel.imgElements[dot])
			carosel.activeIndex = dot
			carosel.setDotsStyle()
		})
		if (dot == carosel.activeIndex) { 
			carosel.dots[dot].classList.replace(dotStyleDefault, dotStyleActive) 
		}
		carosel.dotsContainer.append(carosel.dots[dot])
	}
}

