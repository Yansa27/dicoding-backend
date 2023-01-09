// objek blue print
// constructor function 

function Car (color , brand , maxspeed , chassiNumber) {
    this.color = color;
    this.brand = brand; 
    this.maxspeed = maxspeed;
    this.chassiNumber = chassiNumber;
}

Car.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function () {
    console.log (`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function () {
    console.log (`${this.brand} ${this.color} is turning`);
}

const car1 = new Car ("red" , "honda" , 200 , "to-1j");
const car2 = new Car ("blue" , "toyota" , 150 , "ko-h1");


console.log(car1);
console.log(car2);

car1.drive();
car2.drive();