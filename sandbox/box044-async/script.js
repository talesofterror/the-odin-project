import {giphy} from "./tinnedfish/tin.js"

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

giphyFetch(giphyRequest)


