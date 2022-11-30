//* if/else

// if
const today = true;

console.log("bagaimana cuaca hari ini")
if (today) {
    console.log("cerah")
}

console.log("semangat")

// else
let nilai = 70

if (nilai > 80) {
    console.log("anda lulus")
}else {
    console.log("anda tidak lulus")
}

console.log("jangan putus asa semangat")

// else if

const language = "frech"
let greeting = "selamat pagi"

if (language === "english") {
    greeting = "good morning"
} else if (language === "frech") {
    greeting = "bounjour !"
}

// ternary
console.log (greeting)

let bahasa = "indo"
const pilihan = bahasa ? "indo" : "bukan indo"

console.log(`pilihan anda andalah ${pilihan}`)