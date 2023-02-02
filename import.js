// const {coffeeStock, isCoffeeMachineReady} = require('./export');
 
// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

import coffeeStock from './state.js';
 
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(coffeeStock);


