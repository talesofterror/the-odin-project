/*
 * Modules should have a single purpose.
 *
 * For instance a module that determines game logic and
 * also manipulates the DOM should be editted so that DOM
 * manipulation happens in another module
 * */

// from duncan-mcardle.medium.com

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (true) { // Logic to determine whether or not the car should start
            this.errorLog(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        this.errorLog(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }

    errorLog(message) {
        console.log(message);
    }
}

// should be refactored to

class ErrorHandler {
	static errorLog(message) {
			console.log(message);
	}
	// Had to make this static because I don't want to have to instantiate it
}

class Car2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (true) { // Logic to determine whether or not the car should start
            ErrorHandler.errorLog(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        ErrorHandler.errorLog(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }
}

module.exports = { Car2, ErrorHandler }
