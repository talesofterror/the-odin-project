
let number1 = 1

console.log(number1 && 3)

let a = prompt("First Number?", 1)
let b = prompt("Second Number?", 2)

console.log(+a + +b)


/*

1 = 0
2 = -1
3 = 1  ~ I'm assuming true evaluates to 1 and false evaluates to 0
4 = 2
5 = 6
6 = NaN
7 = NaN  ~ the expression is ["$" + 4 + 5]
8 = 2
9 = NaN
10 = [ -9 5]
11 = NaN  ~ expression is [" -9 " -5]
12 = 1  ~ the expression is [null + 1]
13 = NaN
14 = NaN

*/

let numbers = [100, 50, 25, 30, 543, 22, 30]

let largest2 = 0
function findLargest () {
  for (i of numbers) {
    if (i > largest2) { 
      largest2 = i 
    }
  }
}
findLargest()
console.log(largest2)

let largest = 0
function findLargest2() {
  for (number of numbers) {
    if (number > largest){
      largest = number
    }
  }
}
findLargest2()
console.log(largest)


