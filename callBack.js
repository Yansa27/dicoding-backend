// call back 

const orderCoffe = callback =>  {
    let coffe = null;
    console.log("sedang membuat kopi...");

    setTimeout(() => {
        coffe = "kopi sudah jadi";
        callback(coffe);
    } , 3000);
}

orderCoffe(coffe => {
    console.log (coffe);
});

// Hell calback

function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients) 
        .then(makeThedought)
        .then(pourDough)
        .then(bakeAcake)
        .then(console.log);
}