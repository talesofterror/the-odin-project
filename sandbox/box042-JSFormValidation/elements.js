
function createForm () {
	const elem = document.createElement("form")
	elem.name = "form"
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

		let text = document.createElement("div")
		text.textContent = items[i].text

		let element = items[i].element()
		element.name = items[i].text
		element.id = items[i].text
		form.append(element)

		let item = createItem(items[i].text)
		item.append(text, element)

		document.body.append(item)
	}
}
