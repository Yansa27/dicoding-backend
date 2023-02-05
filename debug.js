// penaganan eror 
// ! Try and Catch

// try {
//     console.log("awal blok try");
//     errorCode;
// } catch (eror) {
//     console.log("terjadi eror");
//     console.log(eror.name);
//     console.log(eror.message);
//     console.log(eror.stack);
// ! name : Nama error yang terjadi.
//! message : Pesan tentang detail error.
//! stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.
// }

// ! try-catch-finally
// try {
//     console.log("baris awal");
//     errorCode;
// } catch (error) {
//     console.log("di abaikan");
// }
// finally {
//     console.log("ok")
// }


// ! Throwing Errors
let json ='{"age": 20 }';

try {
    let user = JSON.parse(json);
    if (!user.name){
        throw new SyntaxError("'name' is not required");
    }
    console.log(user.name);
    console.log(user.age);
} catch (error) {
   if (error instanceof SyntaxError) {
    console.log(`JSON error : ${error.message}`);
   } else if (error instanceof ReferenceError) {
    console.log(eror.message);
   }else {
    console.log(error.stack);
   }
// ! Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
}