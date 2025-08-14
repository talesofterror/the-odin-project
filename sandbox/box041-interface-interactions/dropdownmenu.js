export function dropdownEffect (buttonElement, dropdownElement) {
	buttonElement.addEventListener( "click", (e) => {
		if (dropdownElement.style.visibility == "hidden") { 
			dropdownElement.style.visibility = "visible"
		} else {
			dropdownElement.style.visibility = "hidden"
		}
	})	
}

