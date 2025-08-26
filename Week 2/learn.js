//Arithmetic Operators
//Increament and decreament
let j=5
j++;

let y=4
y--;
console.log(j)
console.log(y)

let stock=10; 
stock--
console.log(`Remaining stock is ${stock}`)

let stockQty=10; stockQty -= 2 //stockQty--;
console.log(`Remaining stock is ${stock}`)

let productSold=0;
productSold++;
console.log(`Products sold today ${productSold}`)

//message method
/*let productSold=0;
productSold++;
let message= Products sold are ${productSold}
console.log(message)*/

function recordProducts(){
    productSold++;
    console.log(`Products sold today ${productSold}`);
}

//Booleans
let stock1 = 5;
let payment = 50000;
let price1 = 50000;
if(stock>0 && payment>=price){
    console.log("Product available")
    console.log("sale approved")
}
else {
    console.log("Out of Stock")
    console.log("cannot process sale")
}

//When one buys lots of things and maks a payment, they are given a discount
let price = 50000;
let requiredAmount = 50000;
let quantity = 20;
if(requiredAmount>=price && quantity>=20) {
    console.log("Product available")
    console.log("sale approved")
    console.log("Discount applied")
}
else {
    console.log("Cannot process sale")
    console.log("No discount is applied")
}