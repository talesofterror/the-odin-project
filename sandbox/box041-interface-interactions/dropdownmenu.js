export function dropdownEffectVisibility (buttonElement, dropdownElement) {
	buttonElement.addEventListener( "click", (e) => {
		if (dropdownElement.style.visibility == "hidden") { 
			dropdownElement.style.visibility = "visible"
		} else {
			dropdownElement.style.visibility = "hidden"
		}
	})	
}

export function dropdownEffectDisplay (buttonElement, dropdownElement, defaultDisplayMode) {
	buttonElement.addEventListener( "click", (e) => {
		if (dropdownElement.style.display == "none") { 
			dropdownElement.style.display = defaultDisplayMode
		} else {
			dropdownElement.style.display = "none"
		}
	})	
}
