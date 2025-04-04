/* modules should be open for extension, but closed to modification
 * 
*/

// from duncan-mcardle.medium.com

class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

const standardVehicle = new Vehicle(10, 15);

console.log(standardVehicle.getRange()); // Outputs '150'

// To an hybrid vehicle that factors in electricRange
// you can extent Vehicle into HybridVehicle and 
// overwrite the new range calculation. 

class Vehicle2 {
	constructor (fuelCapacity, fuelEfficiency) {
		this.fuelCapacity = fuelCapacity
		this.fuelEfficiency = fuelEfficiency
	}

	getRange() {
		return this.fuelEfficiency * this.fuelCapacity
	}
}

class HybridVehicle extends Vehicle {
	constructor (fuelCapacity, fuelEfficiency, electricRange) {
		super(fuelCapacity, fuelEfficiency)
		this.electricRange = electricRange
	}

	getRange() {
		return this.fuelEfficiency * this.fuelCapacity + this.electricRange
	}
}

module.exports = {
	Vehicle2,
	HybridVehicle,
}

// this avoids having to use a conditional statement in the 
// original Vehicle class' getRange() method
