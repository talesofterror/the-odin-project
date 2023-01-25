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

// while loop max 

function whileMax(arr) {
  let len = arr.length;		// stores length of the array
  let max = -Infinity;		// stores the smallest possible number
  while (len--) {			// decrements from the high index number until it returns false at 0
    if (arr[len] > max) {	// 
      max = arr[len];		// sets the value of max to the value of the current index
    }						// -- As the while loop decrements, the value of 'max' in the conditional
  }							// statement is reset to the value of the current index the while loop is 
  return max;				// at. On the first loop it checks the value of the first index (the highest index
}							// number since we're decrementing) against the current max value, which 
							// is the value of the prior index number. for index[0 = 10, 1 = 20, 2 = 5], 
// it started at 5 (which is greater than negative infinity), then stores the 5 in max. While decrements,
// so that the next comparison is index[1] = 20 > 5, which is true again. while decrements again, so that the 
// next comparison is index[0] = 10 > 20, which is false, so max is not reassigned.
//
// while() reaches len=0 because we call while() before we decrement. Otherwise while() would only go to 
// len = 1, though we could get the correct answer anyway if the max value isn't index[0]. 

function whileMaxTestCase(arr) {
	let len = arr.length
	let max = -Infinity
	while (--len) {						// if we check against '--len'
		console.log("len = " + len) 	// this will log 'len' only down to 1
		if (arr[len] > max) {
		max = arr[len]
		}
	}
	return max
}

function whileMin(arr) {
	len = arr.length
	min = Infinity
	while(len--){
		if ( arr[len] < min ) {
			min = arr[len]			// if the value of the current index is less than the value of the 
		}							// previous index, then that value is stored. 
	}								// if the value is greater than the value of the prev index, 
	return min						// we check the next index, until we get to len = 0 and we
}									// return 'min'

document.getElementById("ArrayMinMax-while").innerHTML = 
	"Min/Max, While() method: Min = " + whileMin(numbers) 
	+ "; Max = " + whileMax(numbers)


// sort by object property

let objectArray = [ 
		{item: "Pineapple", price: 10},
		{item: "Cucumber", price: 5},
		{item: "Banana", price: 100}
]

// for numbers: 

function sortNumberValue(arr) {
	arr.sort( function (a, b) {return a.price - b.price} )
	return console.log(arr)
}

// for strings: 

function sortStringValue(arr) {
	arr.sort( function(a, b) {
		let x = a.item.toLowerCase()
		let y = b.item.toLowerCase()
			if (x < y) { return -1}
			if (x > y) { return 1}
			return 0
	})
	return arr
}





