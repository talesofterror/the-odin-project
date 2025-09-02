import { morsel } from "./tinnedfish/tin.js"

console.log("hi.")

let weatherSection = document.getElementById("weather")
let giphySection = document.getElementById("giphy")
let giphySearchInput = document.getElementById("giphy-search-input")
let giphySearchValue
let giphySearchForm = document.getElementById("giphy-form")

let giphyManualQuery = "chess"
let giphyManualSearchRequest = `https://api.giphy.com/v1/gifs/search?`
	+ `api_key=` + morsel 
	+ `&q=` + giphyManualQuery 
	+ `&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
let giphyInputSearchRequest = () => `https://api.giphy.com/v1/gifs/search?`
	+ `api_key=` + morsel 
	+ `&q=` + giphySearchValue
	+ `&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

let giphyRefRequest = "./giphyRefData.json"

let giphyResponse

let g_picture1 = document.getElementById("picture-1")
let randomNum = () => Math.floor(Math.random() * 25)

giphySearchForm.addEventListener( "submit", (e)=> {
	e.preventDefault()
	giphySearchValue = giphySearchInput.value
	console.log(giphySearchInput.value)
	giphyFetch(giphyInputSearchRequest())
	console.log(giphyInputSearchRequest)
} )

giphySearchInput.addEventListener( "change", () => {
	giphySearchValue = giphySearchInput.value
	console.log(giphySearchValue)
})

function giphyFetch (request) {
	fetch(request)
	.then( response => {
		if (!response.ok) {
			throw new Error("what the fuck: " + response.status)
		}
		giphyResponse = response.json
		return response.json()
	})
	.then( json => {
		console.log(json)
		console.log(giphySearchValue)
		let img = document.createElement("img")
		img.className = "gihpy-picture"
		img.src = json.data[randomNum()].images.original.url
		g_picture1.append(img)
	})
}
