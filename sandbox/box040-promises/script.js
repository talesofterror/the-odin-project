function get(url) {

	return new Promise( (resolve, reject) => { // constructor takes a callback with resolve and reject params
		let req = new XMLHttpRequest() // create an XMLHttpRequest object

		req.open("GET", url) // sets up the request

		req.onload = function () { // tells the request object what to do when the request completes
			console.log(req.status)
			if (req.status == 200) {
				resolve(req.response) // the first promise callback, sets the value of the argument passed to the first .then callback
			}
			else {
				reject(Error("nope.")) // the second promise callback, sets value of the argument passed to the second .then callback
			}
		}

		req.send()
	})

}

get("./test").then( function (response) {
	console.log("This is the function that called when the promise resolves -- ", response)
}, function(error) {
	console.log("This is the function that's called when the promise rejects -- ", error)
}) 

get("./testt").then( function (response) {
	console.log("This promise will not resolve because the url is not spelled correctly -- ", response)
}, function(error) {
	console.log("triggering the rejection function", error)
}) 

let testRequest = get("./test")
testRequest.then( function (response) { console.log(response) }) // also works.
