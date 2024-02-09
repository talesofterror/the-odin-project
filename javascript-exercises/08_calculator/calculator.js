const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let init = 0
	return arr.reduce((acc, curr)=>curr+acc, init)
};

const multiply = function(arr) {
  let init = 1
  return arr.reduce((acc, curr)=>curr*acc, init)
};

const power = function(a, b) {
	return a**b
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
