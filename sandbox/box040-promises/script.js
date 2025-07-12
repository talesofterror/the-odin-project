//Everything is out of order


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
	console.log("1. This is the function that called when the promise resolves -- ", response)
}, function(error) {
	console.log("This is the function that's called when the promise rejects -- ", error)
}) 

get("./testt").then( function (response) {
	console.log("This promise will not resolve because the url is not spelled correctly -- ", response)
}, function(error) {
	console.log("2. triggering the rejection function", error)
}) 

let testRequest = get("./test")
testRequest.then( function (response) { console.log("3. " + response) }) // also works.

// The catch callback will be called if the promise fails. 
// Wether to use Promise.catch() or Promise.reject() is up to the dev and depends on when in the 
// response chain you want to log an error.
get("./testt").then( function (response) {
	console.log("This promise will not resolve because the url is not spelled correctly -- ", response)
}).catch( function () {
	console.log(Error("4. this should log an error."))
})

let promise0 = Promise.resolve("5. Promise.all() takes the resolutions of a bunch of promises and ")
let promise1 = Promise.resolve("6. puts them ")
let promise2 = "7. into an "
let promise3 = new Promise( function (resolve, reject) {
	resolve( console.log("8. array.") )
} )

Promise.all([promise0, promise1, promise2, promise3]).then( (value) => {
	console.log(value)
} )

Promise.resolve("9. This is the resolution").then((value) => console.log(value)).then((value2) => console.log("8. 2nd .then: " + value2))
// value2 is undefined, but the string portion of that last .then call works
Promise.resolve( Promise.resolve("10. this is a promise within a promise") ) 
	.then(function (value) {console.log(value)}) // prints the string 10
	.then(function (value) {console.log(value)}) // undefined

let atlast = new Promise( function (res, rej) {
	let rndNum = Math.random()
	if(rndNum > 0.5) {
		res("11. Resolved")
	} else {
		rej("12. Rejected")
	}
})

atlast.then((value) => console.log(value)).finally(()=>console.log("finished"))
// Promise.finally() takes a final callback to call at the end of a resolution chain. 
