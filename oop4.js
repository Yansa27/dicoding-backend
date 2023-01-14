class Car {
    constructor (brand , color , maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.#chassisNumber = this.#generatechassisNumber;

    }

    get chassisNumber() {
        return this.#chassisNumber;
    }

    set chassisNumber(chasisNumber) {
        console.log('youre not allowed change the chasiss number !!');
    }   

    drive () {
        console.log(`${this.brand} ${this.color} is driving `);
    }

    reverse () {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn (direction) {
        console.log(`${this.brand} ${this.color} is turn ${direction}`)
    }

    #generatechassisNumber () {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`
    }
}

const car = new Car ("BMWA" , "red" , 200);
console.log(car);
