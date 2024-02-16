let prevValue = 0
let value = 1
const fibonacci = function(n) {
  for (let i = 1; i <= n; i++) { 
    value += prevValue
  }
  return value
};

/*
Fibonacci!

need the Nth number of the fibonacci sequence



*/

// Do not edit below this line
module.exports = fibonacci;
