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

const factorial2 = function(a) {
  let counter = a
  return a <= 1 ? a : factorial(a * (a - 1))
};

const factorial = function(a) {
  let result = 1
  for (i = a; i > 0; i--) {
    result *= i
  }
  // return a == 0 ? 1 : result
  return result
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
