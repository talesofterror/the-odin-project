const leapYears = function() {
    let inputFour = arguments[0] / 4
    let inputOneHundred = arguments[0] / 100
    let inputFourHundred = arguments[0] / 400
    if (inputFour == Math.floor(inputFour)) {
        if(inputOneHundred == Math.floor(inputOneHundred)){
                if (inputFourHundred == Math.floor(inputFourHundred)){
                return true
            } else return false
        } else return true
    }
    else return false
};

// Do not edit below this line
module.exports = leapYears;
