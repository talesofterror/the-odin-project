const repeatString = function (string, num) {
	let s = '';
	for (let i = 0; i < num; i++) {
		s += string;
	}
	return s;
}

module.exports = repeatString
