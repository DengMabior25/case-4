function Vehicle(name) {
    this.name = name;
}

Vehicle.prototype.getInfo = function() {
    return `This is a vehicle named ${this.name}.`;

};

function Car(name, doors) {
    Vehicle.call(this.name);
    this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const carA = new Car("Sedan", 4);
const carB = new Car("BMW", 2);

console.log(carA.getInfo());
console.log(carA.getInfo === carB.getInfo);