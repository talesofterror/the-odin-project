// figuring out objects and cascading function calls

console.log("hello.")
console.log(fac(5))

let string = "a"

console.log(Boolean(string))


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

// below copied from https://web.archive.org/web/20190211152543/https://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/

 // The data store:
var usersData = [
    {
		firstName: "tommy", 
		lastName: "MalCom", 
		email: "test@test.com", 
		id: 102
	},
    {
		firstName: "Peter", 
		lastName: "breCht", 
		email: "test2@test2.com", 
		id: 103
	},
    {
		firstName: "RoHan", 
		lastName: "sahu", 
		email: "test3@test3.com", 
		id: 104
	}
	];


// A quick utility function that does what it says:
function titleCaseName(str) {
    return str.replace(/\w\S*/g, 
				function (txt) 
				{
        			return txt.charAt(0).toUpperCase() +
							txt.substr(1).toLowerCase();
			    }
			);
	}


// Our object with the chainable methods
var userController = {

    currentUser: "",

    findUser: function (userEmail) {
    	var arrayLength = usersData.length, i;
        for (i = arrayLength - 1; i >= 0; i--) {
            if (usersData[i].email === userEmail) {
                this.currentUser = usersData[i];
                break;
            }
        }
        return this;
    },

    formatName: function () {
        if (this.currentUser) {
            this.currentUser.fullName 
				= titleCaseName(this.currentUser.firstName) 
				+ " " 
				+ titleCaseName(this.currentUser.lastName);
        }
        return this;

    },

    createLayout: function () {
        if (this.currentUser) {
            this.currentUser.viewData = 
			"Member: " + this.currentUser.fullName + ""
            + "ID: " + this.currentUser.id + "" 
			+ "Email: " + this.currentUser.email + "";
        }
        return this;
    },

    displayUser: function () {
        if (!this.currentUser) return;

        $(".members-wrapper").append(this.currentUser.viewData);

    }
};
