/*
const rooms = ["Living Room", "Kitchen", "Bedroom", "Garage"];

for (let i = 0; i < rooms.length; i++) {
  console.log("Hello, " + rooms[i] + "!");
}

//Syntax for loops
//for (initialization, condition, increment/decrement): for loops
// initialize, if (condition){code if true}

//Types of loops
// for, for--of, for--in, for(Each), while, do while

products = ["chair", "table", "cupboard", "drawer"]
for (let i=0; i < products.length; i++){
//    console.log(products[i]);
      console.log(item ${i+1}: ${products[i]});
}

// while (condition i.e stock availability){ code if condition is true; increment/decrement}
let stock = 20
while (stock>0) {
    console.log(selling item -- Stock left is ${stock});
    stock--;
}

//do while
let payment;
let totalDue=20000;

do {
   payment = Number(prompt(`Enter order (Total UGX: ${totalDue}): `));
}
while
(payment < totalDue);

    alert(Your payment has been received);
*/

//do {code to be executed at least once before iteration}
//while (condition)

//for loop ()
products = ["chair", "table", "cupboard", "drawer"]
for (let i=0; i < products.length; i++){
//    console.log(products[i]);
      console.log(`item ${i+1}: ${products[i]}`);
}

//while loop (Repeat something until the condition is made complete)
let stock = 20
while (stock>0) {
    console.log(`selling item -- Stock left is ${stock}`);
    stock--;
}

//do while (keep asking for payment untill full payment is made)
let q=0;
do {
    console.log(q);
    q++;
}
while (q <= 5);

const itemSold = ["chair","table","cupboard"];
//for fixed repeatitions, loop through the code
for (const item of itemSold) {
    console.log(`Sold ${item}`);
}

const sale={
    customer:"Allan",
    product: "Chair",
    quantity: "5",
    price: "45000"
}

for(const key in sale){
    console.log(`${key}:${sale[key]}`)
}