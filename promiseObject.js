// Promise object

const executorFunction = (resolve , reject) => {
    const isCoffeMachineReady = true;

    if (isCoffeMachineReady) {
        resolve("kopi berhasil di buat");
    }else {
        reject("mesin kopi tidak bisa digunakan");
    }
}

const makeCoffe = () => {
    return new Promise(executorFunction);
}

const coffePromise = makeCoffe();
console.log(coffePromise);

// Executor function memiliki dua parameter, yaitu resolve dan reject yang berupa fungsi. Berikut penjelasan detailnya:
// resolve() adalah parameter pertama pada executor function. Parameter ini merupakan fungsi yang dapat menerima satu parameter. Biasanya kita gunakan untuk mengirimkan data ketika promise berhasil dilakukan. Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi fulfilled.
// reject() adalah parameter kedua pada executor function. Parameter ini merupakan fungsi yang dapat menerima satu parameter dan digunakan untuk memberikan alasan kenapa Promise tidak dapat terpenuhi. Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi rejected.
// Executor function akan berjalan secara asynchronous hingga akhirnya kondisi Promise berubah dari pending menjadi fulfilled/rejected.