const numbers = [300, 500, 200, 100, 400];
let numbersSlice = numbers.slice(0)
let randomN = Math.random(); // value between 0 and 1

// random value from first random array re-sort method
let randomN2 = 0;
setInterval(intervalFunc, 1000);
function intervalFunc() {
  randomN2 = () => 0.5 - Math.random();
  document.getElementById("numbers").innerHTML = "Array randomized using first method: " 
    + numbers.sort( () => 0.5 - Math.random() );
  document.getElementById("random").innerHTML = "Random number using first array re-sort method: " + randomN2();
}

//random value from Fisher-Yates method
let randomNFY;
let iteration = 4;
setInterval(intervalFY, 1000);
function intervalFY() {
  randomNFY = () => Math.floor(Math.random() * (iteration + 1));
  document.getElementById("randomFY").innerHTML = "Random number using Fisher-Yates random value: " + randomNFY();
}
  
// // FISHER-YATES RANDOMIZATION ALGO


  for (i = numbersSlice.length - 1; i > 0; i --){  // iterate backwards through array indices
    let j = Math.floor(Math.random() * (i + 1))    // random number between 0 and the current index position
    let k  = numbersSlice[i]                       // var storing current index position
    numbersSlice[i] = numbersSlice[j]              // assign current index position to new, random index position
    numbersSlice[j] = k                            // assign value of randomized index position to value of original
  }                                                //    index position

document.getElementById("FYarray").innerHTML = "Fisher-Yates Array: " + numbersSlice


// min-max using array.length 

let MinMaxLength = {
	min: function (array) {
		let min
		array.sort( (a, b) => a-b )
		min = array[0]
		return min
		}
	,	

	max: function (array) {
		let max
		let l = array.length
		array.sort( (a, b) => a-b )
		max = array[array.length - 1]
		return max
		}
	}


document.getElementById("ArrayMinMax-length").innerHTML =
	"Min/Max, Length Method: "
	+ "Min = " + MinMaxLength.min(numbers) 
	+ "; Max = " + MinMaxLength.max(numbers)

// min-max using apply()

let MinMaxApply = {
	min: function (array) {
	return Math.min.apply(null, array)
	}
	,
	max: function (array) {
	return Math.max.apply(null, array)
	}
}

document.getElementById("ArrayMinMax-apply").innerHTML = 
	"Min/Max, Apply() Method: "
	+ "Min = " + MinMaxApply.min(numbers)
	+ "; Max = " + MinMaxApply.max(numbers)
