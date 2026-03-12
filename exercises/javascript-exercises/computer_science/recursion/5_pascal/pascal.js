const pascal = function(n) {
	let result
	if (n <= 1) {
		return [1]
	}
	else {
		result = addRight(pascal(n-1)).filter( (n)=>n!=0 );
	}
	return result
};

function addRight (a) {
  // [1, 2, 3] should == [1, 3, 5, 3]
  // if (a.each( (i) => !Number.isInteger(i))) {return 0}	
	a.push(0)
	a.splice(0, 0, 0)
  let result = []
  for (let [index, item] of a.entries()) {
    if (index == 0) { result.push(item + 0); result.push(item + a[index+1])}
    else if (index == a.length-1) { result.push(item + 0)}
    else result.push( item + a[index+1])
  }
	return result.filter( (n) => n!=0 )
}
  
// Do not edit below this line
module.exports = pascal;
