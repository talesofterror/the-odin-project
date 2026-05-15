// hash function

let testString00 = `hanta`

function simpleHash (input) {
	let result = 0
	for (let i = 0; i < input.length; i++) {
		result += input[i].charCodeAt()
	}
	return result
}

console.log(simpleHash(testString00))
console.log(simpleHash("bing bong"))
console.log(simpleHash("dfjkhgsjklhfljkshdflgjkhsdfklgjh"))
console.log(simpleHash("hjglkfdshkjglfdhskjlfhlkjsghkjfd")) //collision!




