/* 
 * Liskov Substitution says a class should be able to ebody the functionality of all its
 * instances. So the Rectable class below is insufficient for the Square child class
 * because the way its dimensions are set need to be different. 
 *
 * */

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    setHeight(newHeight) {
        this.height = newHeight;
    }
}

class Square extends Rectangle {}

const rectangle = new Rectangle(4, 5);
const square = new Square(4, 4);

console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}`); // Outputs 'Height: 4, Width: 5' (correct)
console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 4, Width: 4' (correct)

square.setHeight(5);
console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 5, Width: 4' (wrong)

// Let's try to fix it with some open-closed action...?

class Rectangle2 {
	constructor (height, width) {
		this.height = height
		this.width = width
	}

	setHeight(num) {
		this.height += num
	}
}

class Square2 extends Rectangle2 {
	constructor(size) {
		super(size, size)
	}

	setHeight(num) {
		this.height = num
		this.width = this.height 
	}
}

module.exports = { Rectangle2, Square2 }

// super is needed when changing the arguments in the constructor
// it tells the parent class what to do with it's original
// constructor parameters
