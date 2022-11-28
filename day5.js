// operator 

const aNumber = "10"
const aNumber1 = 10

console.log(aNumber == aNumber1) // true karena nilai nya sama 
console.log(aNumber === aNumber1) // false karena jenis tipe data nya tidak sama 

// logical operator 
// "&&" operator and/dan
// "||" operator or/atau
// "!" operator not/tidak

let a = 10
let b = 12 

// Operator AND
console.log(a < 15 && b > 10)
console.log(a > 15 && b > 10)
// Operator OR
console.log(a < 15 || b > 10)
console.log(a > 15 || b > 10)
// Operator NOT
console.log(!(a < 15 ))
console.log(!(a < 15 && b > 10))

// IF/ELSE 
let nilai = 80 

if (nilai > 60) {
    console.log("ANDA LULUS")
} else {
    console.log("NILAI ANDA TIDAK CUKUP")
}
// "?" Ternary operator / conditional expresion 

let member = false 
const discount = member ?  0.1 : 0 ;

console.log(`Selamat anda mendapatkan discount ${discount}%`)

