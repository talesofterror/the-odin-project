const greeting = "hello."
console.log(greeting)

const item1 = document.getElementById("item-1")
const item2 = document.getElementById("item-2")

// item1.textContent = "Test."
// item2.textContent = "Test."

const obj0 = {
	entry1: "this is a string",
	entry2: 5,
	"entry3": function () {
		console.log("obj0 entry3 is a function")
	},
	"entry3*": "the key for this value has a weird character in it"
}

for ( k in obj0 ) {
	item1.innerHTML += k + ": " + obj0[k] + "<br>"
}
