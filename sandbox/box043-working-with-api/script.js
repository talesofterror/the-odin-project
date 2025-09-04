import { morsel1, morsel2 } from "./tinnedfish/tin.js"

console.log("hi.")

let weatherSection = document.getElementById("weather")
let giphySection = document.getElementById("giphy")

// WEATHER

let weatherManualQuery = "90210"
let weatherManualRequest = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`
	+ weatherManualQuery
	+ `?unitGroup=us&key=` + morsel2
	+ `&contentType=json`

let weatherRefRequest = "./weatherRefData.json"
let weatherResponse

let w_item1 = document.getElementById("weather-city")

function weatherFetch(request) {
	fetch(request)
	.then( response => {
		if (!response.ok) {
			console.log("ERROR!")
		}
		weatherResponse = response.json()
		console.log(weatherResponse)
		return weatherResponse
	})
	.then(json => {
		console.log(json)
		w_item1.textContent = json.address
	})
}

weatherFetch(weatherManualRequest)

// GIPHY

let giphySearchInput = document.getElementById("giphy-search-input")
let giphySearchValue
let giphySearchForm = document.getElementById("giphy-form")

let giphyManualQuery = "chess"
let giphyManualSearchRequest = `https://api.giphy.com/v1/gifs/search?`
	+ `api_key=` + morsel1 
	+ `&q=` + giphyManualQuery 
	+ `&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
let giphyInputSearchRequest = () => `https://api.giphy.com/v1/gifs/search?`
	+ `api_key=` + morsel1 
	+ `&q=` + giphySearchValue
	+ `&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

let giphyRefRequest = "./giphyRefData.json"

let giphyResponse

let g_picture1 = document.getElementById("picture-1")
let randomNum = () => Math.floor(Math.random() * 25)

giphySearchForm.addEventListener( "submit", (e)=> {
	e.preventDefault()
	giphySearchValue = giphySearchInput.value
	giphyFetch(giphyInputSearchRequest())
} )

giphySearchInput.addEventListener( "change", () => {
	giphySearchValue = giphySearchInput.value
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
		let img = document.createElement("img")
		img.className = "gihpy-picture"
		img.src = json.data[randomNum()].images.original.url
		g_picture1.append(img)
	})
}
