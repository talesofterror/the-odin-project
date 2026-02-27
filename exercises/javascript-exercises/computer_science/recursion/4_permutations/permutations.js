const permutations = function(a) {
	if (a.length == 0) return [a]
	if (a.length == 1) {
		return [[a[0]]]
	}

  let result = []
	let currentIndex = a[0]
	let mutations = permutations(a.slice(1))


	for (let mutation of mutations) {
		for (let i = 0; i <= mutation.length; i++) {
			left = mutation.slice(0,i)
			right = mutation.slice(i)
			result.push( [...left, currentIndex, ...right] )
		}
	}

	return result
};
  
// Do not edit below this line
module.exports = permutations;
