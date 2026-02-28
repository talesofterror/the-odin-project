async function loadModule (file) {
  await import("./modules/" + file)
  console.log(file.toUpperCase() + " loaded.")
}

loadModule("pow.js")
loadModule("departments.js")
loadModule("linked-lists.js")
loadModule("collatz.js")
loadModule("contains.js")
loadModule("total-integers.js")
loadModule("permutations.js")
