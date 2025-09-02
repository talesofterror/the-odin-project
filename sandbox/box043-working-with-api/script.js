import { morsel } from "./tinnedfish/tin.js"

console.log("hi.")

let weatherSection = document.getElementById("weather")
let giphySection = document.getElementById("giphy")

let giphyQuery = "chess"
let giphyResponse
let giphyRequest = `https://api.giphy.com/v1/gifs/search?`
	+ `api_key=` + morsel 
	+ `&q=` + giphyQuery 
	+ `&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
let giphyRefRequest = "./giphyRefData.json"

let g_child01 = document.createElement("div")
let g_picture1 = document.getElementById("picture-1")
let randomNum = () => Math.floor(Math.random() * 25)


fetch(giphyRefRequest)
	.then( response => {
		if (!response.ok) {
			throw new Error("what the fuck: " + response.status)
		}
		giphyResponse = response.json
		console.log(response)
		return response.json()
	})
	.then( json => {
		console.log(json)
		let img = document.createElement("img")
		img.className = "gihpy-picture"
		img.src = json.data[randomNum()].images.original.url
		g_picture1.append(img)
	})





function giphyGrabber () {
	
}


