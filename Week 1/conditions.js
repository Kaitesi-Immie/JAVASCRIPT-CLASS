//Stock//
let stock = 30;
if(stock>0) {
    console.log("Product is available") 
}
else {
    console.log("Out of stock")
}

//Payments//
let paymentStatus="pending";
if (paymentStatus==="paid") {
    console.log("Thank you for your payment");
}
else {
    console.log("Payment is still pending")
}

//Transport fee//
let distanceKm= 15;
let transportFee= 0;
if (distanceKm<15) {
    console.log("Free transport");
}
else {
    transportFee= 2 * 7000;
    console.log("Transport fee is: " + 14000 + " UGX");
}

//Login Access//
//&&//
let isLoggedIn = true;
let isAdmin = true;
if (isLoggedIn && isAdmin) { 
    console.log("Access granted"); 
} 
else { 
    console.log("Access denied"); 
}

const num =10
console.log (num<11)