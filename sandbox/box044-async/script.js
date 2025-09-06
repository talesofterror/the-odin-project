import {giphy, github_name, github_cred} from "./tinnedfish/tin.js"

const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

function getPersonsInfo(name) {
  return server.getPeople().then(people => {
    return people.find(person => { return person.name === name });
  });
}

async function getPersonsInfoAsync(name) {
  const people = await server.getPeople();
  const person = people.find(person => { return person.name === name });
  return person;
}

getPersonsInfo("Freyja").then(person => console.log(person.name, person.age))
getPersonsInfoAsync("Thor").then(person => console.log(person.name, person.age))

let giphyQuery = "ghosts"
let giphyRequest = `https://api.giphy.com/v1/gifs/search?`
	+ `api_key=` + giphy
	+ `&q=` + giphyQuery 
	+ `&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

async function giphyFetch(request) {
	let result = await fetch(request)
	let json = await result.json()
	console.log(json)
}

// giphyFetch(giphyRequest)


// convert to async function: 
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404

async function loadJsonAsync (url) {
	try {
		let response = await fetch(url)
		let json = await response.json()
		console.log(json)
		return json
	}	catch (err) {
		throw new Error(err + ", bitch")
		// return err
		// alert(err)
	}
}

// loadJsonAsync("https://javascript.info/no-such-user.json").then( json => console.log(json) )
// ^ works but we can just log in the function itself

// loadJsonAsync("penis.com")
// ^  returns the error, plus the string i attached

// loadJsonAsync(giphyRequest)
// ^ returns the giphy search object

let github_encode = btoa(`${github_name}:${github_cred}`)

let githubFetch = async (url) => {
	return fetch(url, {
		method: "GET", 
		headers: {
			"Authorization": github_encode, 
			"Content-Type": "application/json"
		}
	})
}


//rewrite with async/await
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJsonGithub(url) {
  return githubFetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}

function demoGithubUser(query) {
  let name = query;

  return loadJsonGithub(`https://api.github.com/users/${name}`)
    .then(user => {
      console.log(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("No such user, please reenter.");
        // return demoGithubUser();
      } else {
        throw err;
      }
    });
}

/// ~~~~

async function loadJsonGithub2(url) {
	let response = await githubFetch(url)
	if (response.status == 200) {
		return await response.json()
	} else {
		throw new HttpError(response)
	}
}

async function demoGithubUser2(query) {
  let name = query;

	try {
		let user = await loadJsonGithub2(`https://api.github.com/users/${name}`)
		console.log(`Full name: ${user.name}`)
		console.log(user)
	} catch (err) {
		if (err instanceof HttpError && err.response.status == 404) {
			console.log("No such user, please reenter.")
		} else {
			throw err
		}
	}
}

let githubSearch = "sdkjhkjdfh"

// demoGithubUser(githubSearch)
// ^ original works as expected
demoGithubUser2(githubSearch)
// ^ rewrite works the same
// ^ returns user name when successful, throws HttpError and says
// "no such user..." when there's no matching user

// Must remember: a 404 response from fetch() does not trigger a catch block,
// but it looks like I can force it to by using the "throw" keyword
