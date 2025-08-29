

export const items = [
	{
		text: "email",
		element: function () {
			let e = document.createElement("input")
			e.type = "email"
			e.autocomplete = "email"
			e.addEventListener("input",  ()=> {
				console.log(e.validity)
				if (e.validity.typeMismatch) {
					e.setCustomValidity("You need to type in an email, idiot")
					console.log(e.validationMessage)
				} else {
					e.setCustomValidity("")
				}
			})
			return e
		}
	},
	{
		text: "country", 
		element: function () {
			let e = document.createElement("select")
			e.autocomplete = "confirm-password"
			return e
		}
	},
	{
		text: "postal-code",
		element: function () {
			let e = document.createElement("input")
			e.type = "text"
			e.autocomplete = "postal-code"
			return e
		}
	},
	{
		text: "password",
		element: function () {
			let e = document.createElement("input")
			e.type = "password"
			e.autocomplete = "new-password"
			return e
		}
	},
	{
		text: "confirm-password",
		element: function () {
			let e = document.createElement("input")
			e.type = "password"
			e.autocomplete = "confirm-password"
			return e
		}
	},
	{
		text: "submit",
		element: function () {
			let e = document.createElement("button")
			e.type = "submit"
			// e.textContent = "submit"
			// e.autocomplete = "confirm-password"
			e.classList.add("submit-button")
			return e
		}
	},

]
