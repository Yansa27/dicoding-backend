// imutability

const user = {
    firstname : "yansa",
    lastname : "yansa27" // typo
};

const newNameWithLastname = (newlastname , user) => {
    return{...user , lastname : newlastname};
};

const newUser = newNameWithLastname('yansa07' , user);

console.log(newUser);

// Rekursif 
const countdown = start => {
    console.log(start)
    if(start > 0 ) countdown(start-1);
}

countdown(10);