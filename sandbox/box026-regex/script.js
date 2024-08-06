
// * page maker

let pageHolster = document.getElementById("page-holster")
let numberOfPages = 3

for (let i = 0; i < numberOfPages; i++) {
  let page = document.createElement("span")
  page.classList.add("page-button")
  if (i == 0) {
    page.innerHTML = "<a href='index.html'>" + "pg1" + "</a> "
  }
  else {
    page.innerHTML = `<a href="pg${i+1}.html">` + `pg${i+1}` + `</a> `
  }
  pageHolster.appendChild(page)
}

// * utility functions

function toggleClass(event, boolean, defaultClass, optionClass) {
  if (boolean) {
    event.target.classList.remove(defaultClass)
    event.target.classList.add(optionClass)
  }
  else {
    event.target.classList.remove(optionClass)
    event.target.classList.add(defaultClass)
  }
}


// * input scripting

let scriptedInputs = document.getElementsByClassName("scripted")

for (const e of scriptedInputs) {
  e.classList.add("scripted-invalid")
}

document.addEventListener("input", (e) => {
  if (e.target.classList[0] == "not-scripted") {
    return
  }
  else if (e.target.value != "") {
    let regexRule = new RegExp(e.target.getAttribute("data-pattern"))
    let regExTest = regexRule.test(e.target.value)
    toggleClass(e, (regExTest == true), "scripted-invalid", "scripted-valid")
  }
  else {
    e.target.classList.remove("scripted-valid")
    e.target.classList.add("scripted-invalid")
  }
})


