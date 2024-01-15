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

let user = {
  name: "Fruit Snack",
  age: 800,
  "likes birds": true
}

let container2 = document.getElementById("container2")
let button_Name = document.getElementById("name-button")
let button_Age = document.getElementById("age-button")
let button_UserAssert = document.getElementById("user-assert-button")

container2.textContent = "My name is " + user.name + ". I'm " + user.age + " years old, and everything you've heard about me is " + user["likes birds"]
