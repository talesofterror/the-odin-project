const fibonacci = function (n) {
  if (n < 0){
    return "OOPS"
  }
  backtrackArray = []
  value = 1
  prevValue = 0
  for (let i = 0; i <= n; i++) {
    if (i == 0) {
      backtrackArray.push(0)
      continue
    }
    if (i == 1) {
      backtrackArray.push(1)
      continue
    }
    value += prevValue
    backtrackArray.push(value)
    if (i < 1) {
      prevValue = backtrackArray[i]
    } else {
      prevValue = backtrackArray[i - 1]
    }
  }
  return value
};

/*

Fibonacci!

USE ARRAYS
index refers to prev value?

need the Nth number of the fibonacci sequence

prevValue = 1
i = 1 = N

iter 0:

1.  1
2.  0 + 1 = 1
3.  1 + 1 = 2
4.  1 + 2 = 3
5.  2 + 3 = 5
6.  3 + 5 = 8
7.  5 + 8 = 13
8.  8 + 13 = 21
9.  13 + 21 = 34
10.  21 + 34 = 55
11.  34 + 55 = 89
12. 89 + 55 = 144

*/

// Do not edit below this line
module.exports = fibonacci;
