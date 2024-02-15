let split
let backwardString = ''
const palindromes = function (a) {
  split = a.toLowerCase().split('')
  let exclude = ["!", ".", ",", "?", / /g]
  for (i = 0; i < split.length; i++){
    if (split[i] == exclude.filter((e)=>e == split[i])){
      split.splice(i, 1)
    }
  }
  for (i = split.length-1; i >= 0; i--) {
    backwardString += split[i]
  }
  return split.join('') == backwardString ? true : false
}

// Do not edit below this line
module.exports = palindromes;
