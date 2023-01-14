class Car  {
    constructor (brand , color , maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;

        this._chassisNumber = `${brand}-${Math.floor(Math.random () * 1000)}`
    }  

    get chassisNumber() {
        return this._chassisNumber;
      }
     
      set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
      }
}

const car = new Car('BMW', 'red', 200);
console.log(car.chassisNumber);
car.chassisNumber = 'BMW-1';
console.log(car.chassisNumber);


// user

class User {
    constructor (firtsName , lastName) {
        this.firtsName = firtsName;
        this.lastName = lastName;
    }

    get fullName() {
        return(`${this.firtsName} ${this.lastName}`);
    }

    set fullName (fullName) {
        const [firtsName , lastName] = fullName.split (' ');
        this.firtsName = firtsName;
        this.lastName = lastName;
    }
}

const user = new User ("john" , "doe");
console.log (user);
console.log(user.fullName);


user.fullName = "fulan fulanah"
console.log(user);
console.log(user.fullName);
