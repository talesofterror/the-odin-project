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
    if (regExTest == true) {
      e.target.classList.remove("scripted-invalid")
      e.target.classList.add("scripted-valid")
    }
    else {
      e.target.classList.remove("scripted-valid")
      e.target.classList.add("scripted-invalid")
    }
  }
  else {
    e.target.classList.remove("scripted-valid")
    e.target.classList.add("scripted-invalid")
  }
})

