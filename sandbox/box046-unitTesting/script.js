async function loadModule(file) {
  await import("./modules/" + file)
  console.log(file.toUpperCase() + " loaded.")
}



