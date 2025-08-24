export const items = [
	{
		text: "email",
		element: function () {
			let e = document.createElement("input")
			e.type = "email"
			e.autocomplete = "email"
			e.setAttribute("form", "form")
			return e
		}
	},
	{
		text: "country", 
		element: function () {
			let e = document.createElement("select")
			e.setAttribute("form", "form")
			return e
		}
	},
	{
		text: "postal-code",
		element: function () {
			let e = document.createElement("input")
			e.type = "text"
			e.autocomplete = "postal-code"
			e.setAttribute("form", "form")
			return e
		}
	},
	{
		text: "password",
		element: function () {
			let e = document.createElement("input")
			e.type = "password"
			e.autocomplete = "new-password"
			e.setAttribute("form", "form")
			return e
		}
	},
	{
		text: "confirm-password",
		element: function () {
			let e = document.createElement("input")
			e.type = "password"
			e.autocomplete = "confirm-password"
			e.setAttribute("form", "form")
			return e
		}
	}
]
