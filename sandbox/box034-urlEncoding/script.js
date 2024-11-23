const greeting = "hello."
console.log(greeting)

item1 = document.getElementById("item1")
item2 = document.getElementById("item2")
form = document.getElementById("form")

console.log(document.location)
console.log(document.location.toString())
// document.location.hash = "hash"
console.log(document.location.hash)
// document.location.search = "query"
console.log(document.location.search)

function getQueryParams() {
		const params = {};
		const queryString = window.location.search;
		if (queryString) {
				const pairs = queryString.substring(1).split("&");
				for (const pair of pairs) {
						const [key,value] = pair.split("=");
						params[decodeURIComponent(key)] = decodeURIComponent(value);
				}
		}
		return params;
}

function printQueryParams () {
	console.log(getQueryParams())
}

printQueryParams()

console.log(getQueryParams())
console.log(encodeURIComponent(getQueryParams().thing1))
console.log(decodeURIComponent(getQueryParams().thing1))
console.log(encodeURIComponent("Æ"))
console.log(decodeURIComponent("%C3%86"))
console.log(document.forms)


