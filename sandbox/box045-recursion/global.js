// pascal

/*

0 1 0
0 1 1 0
0 1 2 1 0
0 1 3 3 1 0
0 1 4 6 4 1 0
0 1 5 10 10 5 1 0

*/

function pascal (n) {
	
}

function addRight (a) {
  // [1, 2, 3] should == [1, 3, 5, 3]
  // if (a.each( (i) => !Number.isInteger(i))) {return 0}
  let result = []
  for (let [index, item] of a.entries()) {
    if (index == 0) { result.push(item + 0); result.push(item + a[index+1])}
    else if (index == a.length-1) { result.push(item + 0)}
    else result.push( item + a[index+1])
  }
  return result
}

//permutations review

let permArray1 = [1, 2, 3, 4]; // js is forcing me to use a semicolon ;_;

[permArray1[0], permArray1[2]] = [permArray1[2], permArray1[0]]


function permute (array, index = 0, results = []) {
  if (index == array.length) {
    // We have formed a valid permutation.

    // the [...array] syntax is a way to clone the contents of the array.
    // because we do not want to pass a reference to the array, as that would mean
    // that each item in `results` will be the same item
    results.push([...array]);
    return results;
  }

  for (let i = index; i < array.length; i++) {
    // We use "destructuring assignment" here to swap the values of array[index] and array[i]
    //
    // More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    [array[index], array[i]] = [array[i], array[index]];
    permute(array, index + 1, results);
    [array[index], array[i]] = [array[i], array[index]];
  }

  return results;
};



