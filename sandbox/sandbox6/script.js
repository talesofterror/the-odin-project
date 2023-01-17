console.clear()
console.log("hello.")
console.log(fac(5))

function fac(x) {
	return x < 2 ? 1 : x * fac(x - 1)
}

let object = {
	firstName: "Melvin", 
	lastName: "Jacob",
	dateOfBirth: "10/25/98"
}

let object2 = [

	{firstName: "Miles",
	 lastName: "Villalobos",
	 dateofBirth: "11/25/22"}, 
	{wuTang: "Clan", 
	 aint: "nothin",
	 to: "fuck with"},
	{ functionTest: 
		function testFunc(x) {
		x = x + 1
		return x
		}, 
	  functionTest2:
		function testFunc2(x) {
		x = x * x
		return x
		}
	}

]

