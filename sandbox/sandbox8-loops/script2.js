const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let admitted = 'Admit: ';
let refused = 'Refuse: ';
let refusedArr = []
let admitArr = []

for (i = 0; i < people.length; i++) {

	if (people[i] == "Phil" || people[i] == "Lola") {
		refusedArr.push(people[i])
	}
	else {
		admitArr.push(people[i])
	}
}

for (j = 0; j < refusedArr.length; j++){
	if (j == refusedArr.length - 1) {
		refused += `${refusedArr[j]}.`
	} else {
		refused += `${refusedArr[j]}, ` 
	}
}

for (k = 0; k < admitArr.length; k++) {
	if (k == admitArr.length - 1) {
		admitted += `${admitArr[k]}.`
	} else {
		admitted += `${admitArr[k]}, `
	}
}

// first iter: 
// j = 0; refused.length = 2
// if j == 0


console.log("\n" + admitted + "\n" + refused)


