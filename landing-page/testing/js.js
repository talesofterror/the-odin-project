let mapper = function (input, aValue1, aValue2, bValue1, bValue2) {
    let mappedValue = bValue1 + ((bValue2 - bValue1) / (aValue2 - aValue1)) *
        (input - aValue1)
    return mappedValue
}

var time = 0
var sine = 0

let amp = 10
let phase = 0

setInterval( () => {
    
    let sine = Math.sin(time/10)
    time++
    console.log(sine)

}, 200)


let bgOsc = new String("rgb(" + 50 + ", " + 100 + ", " + 200 + ")")

var bgimage = document.body.style.backgroundColor = bgOsc