//Task 4

interface Product {
    name: string,
    price: number
}

function totalPrice(products: Product[]):number{
    //0 is the initial price or value of the product
return products.reduce((sum,product) => sum + product.price , 0)
}

//this for test the function
const products: Product[] = [
{name: 'apple' , price:6},
{name: 'banana' , price:2},
{name: 'orange' , price:5},


]


//print the output to check the function
console.log('The total price of the product = '+totalPrice(products))