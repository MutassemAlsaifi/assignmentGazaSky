// =============== TASK 2 ===============

let prices = [10,20,30,40,50];
let sumPrices = prices.reduce(sum);
let avgPrices = sumPrices /prices.length ;

//PRINT THE OUTPUT IN THE CONSOLE 
//THIS WILL SUM THE PRICE ARR BASED ON previousPrice + nextPrice AND SO ON
function sum(previousPrice , nextPrice){
    return previousPrice + nextPrice ;
}

console.log('The sum price = '+sumPrices +' The average of all price = '+ avgPrices)