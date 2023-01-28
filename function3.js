const newArray = ["nama" , "kelas" , "umur"].map((name) => { return `${name}!`});

console.log(newArray);

const mahaSiswa = [
    {
        name: "budi",
        score: 70,
    },
    {
        name: "siti",
        score: 80,
    },
    {
        name: "bapak budi",
        score: 90,
    }
]

const NilaiMahaSiswa = mahaSiswa.filter((nilai) => nilai.score >= 80)

console.log("yang lolos");
console.log(NilaiMahaSiswa);


