const palindromes = function (a) {
  let split
  let backwardString = ''
  split = a.toLowerCase().split('')
  let arrayNoSpaces = split.map((str) => str.replace(/\s/g, ''))
  let exclude = ["!", ".", ",", "?", /\s/]
  for (i = 0; i < arrayNoSpaces.length; i++){
    if (arrayNoSpaces[i] == exclude.filter((e)=>e == arrayNoSpaces[i])){
      arrayNoSpaces.splice(i, 1)
    }
  }
  for (i = arrayNoSpaces.length-1; i >= 0; i--) {
    backwardString += arrayNoSpaces[i]
  }
  return arrayNoSpaces.join('') == backwardString ? true : false
}

// Do not edit below this line
module.exports = palindromes;
