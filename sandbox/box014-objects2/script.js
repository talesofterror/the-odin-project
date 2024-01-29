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

  this.addMethod = function (op, func) {
    this[op] = func
  }

  this["+"] = function(a, b) {return a + b}
  this["-"] = function(a, b) {return a - b}
}

let calc = new Calculator()
