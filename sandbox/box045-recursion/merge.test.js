//
// function mergeSort (array) {
// 	if (array.length == 1) {
// 		return array
// 	}
// 	else {
// 		let leftHalf = mergeSort(array.splice(Math.floor(array.length/2)))
// 		let rightHalf = mergeSort(array)
// 		let newArray = []
//
// 		for (let i = 0; i < leftHalf.length; i++) {
// 			for (let j = 0; j < rightHalf.length; j++) {
// 				if (leftHalf[i] < rightHalf[j]) {
// 					newArray.unshift(leftHalf[i])
// 				}
// 				else newArray.unshift(rightHalf[j])
// 			}
// 		}
//
// 		return newArray
// 	}
// }

/*
 * 1. Split the array down the middle (or close to)
 * 2. Take half the og array and split it again
 * 3. Repeat until there's one item in the array
	* */

/* 

[1, 2, 3]
1, 2 		3
1

*/

// Couldn't get it, but i've been told I got close. This is 
// a solution that builds off where I was at when I threw in the towel.

function mergeSort(array) {
  if (array.length <= 1) return array; // Base case

  // FIX 1: Use slice so we don't destroy the original 'array'
  const mid = Math.floor(array.length / 2);
  let leftHalf = mergeSort(array.slice(0, mid));
  let rightHalf = mergeSort(array.slice(mid));

  let newArray = [];
  let i = 0;
  let j = 0;

  // FIX 2: Use a single while loop instead of nested for loops
  // We compare the current "front" of each half
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      newArray.push(leftHalf[i]); // FIX 3: Push to the end
      i++;
    } else {
      newArray.push(rightHalf[j]);
      j++;
    }
  }

  // Grab whatever is left over
  return newArray.concat(leftHalf.slice(i)).concat(rightHalf.slice(j));
}

/*

For one thing, I failing to clean up the leftovers in each side of the split array.
I fully aware of this and had no idea how to fix it. On top of that, the nest loop
defeats the purpose using mergeSort by introducing complexity, specifically since 
the loops make the function O(n^2) rather than the O(n log n) that mergeSort is 
supposed to be. 	

Also, I should not have been using splice(). I thought it would be fine because 
it seemed like original wasn't needed after I processed it. Since arrays are passed by 
referece, processing the array like this would mutate the original array and possibly 
cause problem if the array were used elsewhere. Probably would have worked for this
function but wouldn't work in a system where the array is used elsewhere. So 
slice() is preferred. 

ALSO... unshift() is inefficient.

*/

it("sorts an array from smallest to biggest", ()=> {
	console.log(mergeSort([4, 7, 2, 8]))
	expect(mergeSort([4, 7, 2, 8])).toEqual([2, 4, 7, 8])
	expect(mergeSort([3, 2])).toEqual([2, 3])
})
