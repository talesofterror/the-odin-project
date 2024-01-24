let container1 = document.getElementById("container1")
let button_Delete = document.getElementById("delete-button")
let delete_prompt
let button_Reset = document.getElementById("reset-button")

let intro = new Object({greeting: "hello", dismissal: "goodbye"})

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
function isEmpty (obj) {
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

function sumProp (obj) {
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

function mulitplyNumeric (obj) {
  for (prop in obj) {
    if (typeof obj[prop] == "number") {
      obj[prop] *= 2
    }
  }
  return obj
}

//javascript.info array-methods exercises

// 1

function camelize (string) {
  let stringSplit = string.split("-")
  let result = ""
  for (let i = 1; i < stringSplit.length; i++) {
    stringSplit[i].charAt(0) = stringSplit[i].charAt(0).toUpperCase()
  }
  stringSplit.forEach(element => {
    result += element
  });
  return result
}





