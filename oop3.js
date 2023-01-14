class car  {
    constructor (brand , color , maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;

        this.chassisNumber = `${brand}-${Math.floor(Math.random () * 1000) + 1}`
    }  
}

const car1 = new car ("honda" , "red" , 300);

console.log (car1);

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
