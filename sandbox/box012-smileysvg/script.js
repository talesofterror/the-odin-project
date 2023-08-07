let mouthTransformString = document.getElementById("smiley2").children[0].children[1].getAttribute("transform")
let eyesTransformString = document.getElementById("smiley2").children[0].children[2].getAttribute("transform")

let mouthTransformX, mouthTransformY = ""
for (i = 10; i < mouthTransformString.length; i++){
    if (mouthTransformString[i] != ",") {
        mouthTransformX += mouthTransformString[i]
    } else { break }
}
for (i = 21; i < mouthTransformString.length; i++){
    if (mouthTransformString[i] != ")") {
        mouthTransformY += mouthTransformString[i]
    } else { break }
}
mouthTransformX = parseFloat(mouthTransformX)
mouthTransformY = parseFloat(mouthTransformY)