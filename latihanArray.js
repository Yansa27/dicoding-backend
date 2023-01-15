const shoopIngcart = [
    ['apel' , 'ikan' , 'beras'] ,
    ['buku' , 'pensil'] ,
    ['sapu' , 'bantal' , 'panci']
]

for(let i = 0 ; i <= shoopIngcart.length ; i++) {
    console.log(`Cart #${i + 1}`);
    const cart = shoopIngcart[i];
        for (let j = 0 ; j < cart.length ; i++) {
            console.log(cart[j]);
        }
    
}

