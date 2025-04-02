const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

	let catObject = JSON.parse(catString)

	console.log(catObject[0])
	console.log(catObject[1].name)
	console.log(catObject[2].kittens[1])

	let catMoms = ""

	for (let i = 0; i < catObject.length; i++) {
		for (let j = 0; j < catObject[i].kittens.length; j++) {
			if (catObject[i].kittens[j].gender == "m") {
				male++
			}
		}

		total += catObject[i].kittens.length

		if (i == catObject.length - 1) { 
			catMoms+= `and ${catObject[i].name}.`
			continue
		}
		catMoms += `${catObject[i].name}, `
	}

	motherInfo += catMoms
	kittenInfo = `There are a total of ${total} kittens. ${male} of them are boys.`

// Add your code here

// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
