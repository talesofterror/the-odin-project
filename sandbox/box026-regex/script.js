
// * utility functions

function toggleClass (event, boolean, defaultClass, optionClass) {
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


