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
  for (let i = 0; i < n; i++) {

  }
}

function addRight (a) {
  // [1, 2, 3] should == [1, 3, 5, 3]
  if (a.each( (i) => !Number.isInteger(i))) {return 0}
  let result = []
  for (let [index, item] of a.entries()) {
    if (index == 0) { result.push(item + 0); result.push(item + a[index+1])}
    else if (index == a.length-1) { result.push(item + 0)}
    else result.push( item + a[index+1])
  }
  return result
}

