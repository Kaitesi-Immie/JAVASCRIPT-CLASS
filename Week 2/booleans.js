// const value1 = true;
// const value2 = false;
// console.log(value1);
// console.log(value2);
// console.log(typeof value1);
// console.log(typeof boovalue2);

//Comparison Operators
//> Greater than
//This operator checks if one value is greater than another
console.log(8 > 5);

//< Less than
//This one checks if one value is lesser than another
console.log(7 < 2);

//>= Greater than or equal to
console.log(5 >= 5);

//<= Less than or equal to
console.log(5 <= 5);

//== Equal to
console.log(5 == 5);
console.log("5" == 5); //comparing the string"5" and 5 remains true simply because the equal operator only checks the data and not the datatype.
console.log(6 == 5);

//!= Not equal to
//it does the opposite of what equal to does therefore it checks whether two values are not equal
console.log(5 != 5); //5 is not equal to 5
console.log(6 != 5); // 6 is not equal to 5

//=== Strictly eqaul to
//compares two values and datatypes
//it checks the datatype and data while making the comparison
console.log("5" === 5); //its false because it checks both the data and datatype while making the comparison of 5 but one is a string and another a number

//Payments//
const paymentStatus = "pending";
if (paymentStatus === "paid") {
  console.log("Thank you for your payment");
} else {
  console.log("Payment is still pending");
}

//!== strict not equal to
//considers the string and number equal even if they have the same data
//considers the datatype while making the comparison
console.log("5" !== 5); //string "5" isnt equal to no.5

//Logical Operators
//&& AND Operator: This returns true if both expressions are true
const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn && isAdmin) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//|| OR Operator: This is remains true if one of the expressions is true even though one is false.
const width = 20;
const height = 5.6;
let result = width >= 20 || height < 5;
console.log(result);

//! NOT Operator:
const measurement = height < 6;
console.log(!result);

//Stock//
const stock = 30;
if (stock > 0) {
  console.log("Product is available");
} else {
  console.log("Out of stock");
}

//Transport fee
const distanceKm = 15;
let transportFee = 0;
if (distanceKm < 15) {
  console.log("Free transport");
} else {
  transportFee = 2 * 7000;
  console.log("Transport fee is: " + 14000 + " UGX");
}

//Using else if
if (distanceKm < 10) {
  console.log("Free transport");
} else if (distanceKm <= 15) {
  console.log("Free transport");
} else {
  transportFee = 2 * 7000;
  console.log("Transport fee is: " + 14000 + " UGX");
}