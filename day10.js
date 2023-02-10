// synchronous VS Asynchronous

console.log("selamat datang");

setTimeout(()=> {
    console.log("selamat datang kembali");
}, 3000)

console.log("ada yang bisa di bantu?");

// call back function 
const orderCoffe = () => {
    let coffe = null
    console.log("silahkan menunggu...");

    setTimeout(() => {
        coffe= "kopi sudah jadi";
        callback(coffe)
    }, 3000)
}

orderCoffe (coffe => {
    console.log(coffe);
})