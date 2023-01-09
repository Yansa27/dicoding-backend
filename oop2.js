// class constructor function

class Car  {
    constructor (brand , color , maxxSpeed , chasisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxxSpeed = maxxSpeed;
        this.chasisNumber = chasisNumber;
    }

    drive () {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
}

const car1 = new Car ("honda" , "red" , 200, "kho-01");


console.log(car1);

car1.drive();