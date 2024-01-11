let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")

div1.addEventListener("click", (e) => {
  console.log(e.target)
  alert("div1 clicked!")
})

div2.addEventListener("click", (e) => {
  e.stopPropagation()
  alert("div2 clicked!")
})