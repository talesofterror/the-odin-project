let container1 = document.getElementById("container1")
let button_Delete = document.getElementById("delete-button")
let delete_prompt
let button_Reset = document.getElementById("reset-button")

let intro = new Object({ greeting: "hello", dismissal: "goodbye" })

container1.textContent = intro.greeting
container1.textContent += "... and " + intro.dismissal

button_Delete.addEventListener("click", () => {
  delete intro.dismissal
  container1.textContent = intro.greeting + "... and " + intro.dismissal
})
button_Reset.addEventListener("click", () => {
  intro.dismissal = "goodbye"
  container1.textContent = intro.greeting + "... and " + intro.dismissal
})

let fruitSnack = {
  name: "Fruit Snack",
  age: 800,
  "likes birds": true
}

let container2 = document.getElementById("container2")
let button_Name = document.getElementById("name-button")
let button_Age = document.getElementById("age-button")
let button_UserAssert = document.getElementById("user-assert-button")

container2.textContent = "My name is " + fruitSnack.name + ". I'm " + fruitSnack.age + " years old, and everything you've heard about me is " + fruitSnack["likes birds"]

// Tasks from lesson 

// 1
let user = {}

user.name = "John"
user.surname = "John"
user.name = "Pete"
delete user.name

// 2 
let emptyObj = {}
function isEmpty(obj) {
  for (prop in obj) {
    return false
  }
  return true
}

// 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

function sumProp(obj) {
  let sum = 0
  for (prop in obj) {
    sum += obj[prop]
  }
  return sum
}

// 4

let menu = {
  width: 200,
  height: 600,
  title: "My Menu"
}

function mulitplyNumeric(obj) {
  for (prop in obj) {
    if (typeof obj[prop] == "number") {
      obj[prop] *= 2
    }
  }
  return obj
}

//javascript.info array-methods exercises

// 1

function camelize(string) {
  let stringSplit = string.split("-")
  for (let i = 1; i < stringSplit.length; i++) {
    let newFirstLetter = stringSplit[i].charAt(0).toUpperCase()
    stringSplit.splice(i, 1, newFirstLetter + stringSplit[i].slice(1, stringSplit[i].length))
  }
  return stringSplit.join("")
}

// 2 

filterArray = [5, 3, 8, 1]

function filtered(arr, a, b) {
  let r = arr.filter((elem) => elem >= a && elem <= b)
  return r
}

// 3 

function filteredInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] >= b) {
      arr.splice(i, 1)
    }
  }
}

// 4

function sortDecreasing(arr) {
  arr.sort((a, b) => b - a)
}

// 5 

function sortInPlace(arr) {
  let r = arr.filter((elem) => elem != null)
  return r.sort()
}

// 6 
// need to learn about object constructors
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

const person = {
  name: {
    first: "Bob",
    last: "Smith"
  },
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`)
  },
  introduceSelf() {
    console.log(`Hi, I'm ${this.name[0]}`)
  },
}

function logProperty(obj, prop) {
  console.log(obj[prop])
}

let newProp = "weight"
let newPropValue = "500000 lbs"
person[newProp] = newPropValue

function Person(name) {
  this.name = name
  this.introduceSelf = () => {
    console.log(`Hello, my name is ${this.name}`)
  }
}

let anna = new Person("Anna")
anna.name

function Calculator() {

  this.calculate = function (str) {
    let op = str.split(" ")
    return this[op[1]](Number(op[0]), Number([op[2]]))
  }

  this.addMethod = (op, func) => this[op] = func

  this["+"] = function (a, b) { return a + b }
  this["-"] = function (a, b) { return a - b }
}

let calc = new Calculator()

// 7 
// write the code that converts [users] into an array of [names]

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((prop) => prop.name)

// 8 
// create an array of objects containing properties for 
// [fullName] and [id] using the users2 array

let bill = { name: "Bill", surname: "Smith", id: 1 };
let jill = { name: "Jill", surname: "Hunt", id: 2 };
let hank = { name: "Hank", surname: "Key", id: 3 };

let users2 = [bill, jill, hank];

usersMapped = users2.map((elem) => {
  return {
    fullName: elem.name + " " + elem.surname,
    id: elem.id
  }
})

// 8 
// sort array of objects by the value of an object property value 

let sam = { name: "Sam", age: 25 };
let ben = { name: "Ben", age: 30 };
let liz = { name: "Liz", age: 28 };

let arrSort = [ sam, ben, liz ];

function sortByAge (array) {
  array.sort((a, b)=> {
    a.age - b.age
  })
}
function reverseArray (array) {
  return array.reverse()
}

// 9 
// write a function that shuffled elements of the array 

let arrShuffle = [1, 2, 3]

function shuffle (array) {
  array.sort((elem, i) => {elem[i] = Math.floor(Math.random() * 3)})
}

// gave up looked at the solution, and it's 
// the Fisher Yates algo again. Pasting the 
// code to walk through later

function shuffleFY(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 10 
// get the average of members of an array of objects

let joe = { name: "Joe", age: 25 };
let blo = { name: "Blo", age: 30 };
let glo = { name: "Glo", age: 29 };

let arrAverage = [ joe, blo, glo ];

function getAverageAge (array) {
  let total = array.reduce((acc, elem) => acc + elem.age, 0)
  let av = total / array.length
  return av
}

// 11
// create a function that returns unique values 
// from a larger array 

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function getUnique (arr) {
  let newArr = []
  let ignoreArr = []
  let randomLength = Math.floor(Math.random() * arr.length) + 1
  for (i = 0; i < randomLength; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    if (randomIndex == ignoreArr.filter(((elem) => elem == randomIndex))){
      continue
    } else {
      newArr.push(arr[randomIndex])
      ignoreArr.push(randomIndex)
    }
  }
  return console.table(newArr)
}

// console.table(getUnique(strings))

// 12 
// create a keyed pbject from array

let usersKeyed = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
  let resultObj = {}
  for (i = 0; i < arr.length; i++) {
    resultObj[arr[i].id] = arr[i]
  }
  return resultObj
}

console.table(groupById(usersKeyed))

