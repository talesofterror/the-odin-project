const convertToCelsius = function() {
	let input = arguments[0]
	answer = (input - 32) * (5/9)
	return Math.round(answer * 10)/10
};

const convertToFahrenheit = function() {
	let input = arguments[0]
	answer = (input * 9/5) + 32
	return Math.round(answer * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
