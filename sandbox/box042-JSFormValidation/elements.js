import {countries} from './countries.js'

function createForm () {
	const elem = document.createElement("form")
	elem.id = "form"
	elem.action = ""
	elem.method = "GET"
	elem.noValidate = false
	return elem
}

function createItem (id) {
	const element = document.createElement("div")
	element.classList.add("item")
	return element
}

export function appendItems (items) {
	for (let i = 0; i < items.length; i++) {
		let form = createForm()
		let item = createItem(items[i].text)

		let element = items[i].element()
		element.name = items[i].text
		element.id = items[i].text
		if (items[i].text == "country") {
			for (let country of countries) {
				let option = document.createElement("option")
				option.value = country
				option.textContent = country
				element.append(option)
			}
		}

		if (items[i].text == "submit") {
			element.textContent = items[i].text
			item.classList.add("submit-container")
		} else {
			let text = document.createElement("div")
			text.textContent = items[i].text
			item.append(text)
		}

		element.setAttribute("form", form.id)

		form.append(element)
		item.append(form)

		document.body.append(item)
	}
}
