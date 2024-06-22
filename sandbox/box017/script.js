const nameElement = document.getElementById("name")
const submitElement = document.getElementById("submit")
const resultsElement = document.getElementById("form-results")

submitElement.addEventListener("click", ()=> {
  resultsElement.textContent = nameElement.value
})

