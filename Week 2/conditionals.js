/*Types of control flow of statement
They control the flow ofcode

1. Conditional statements are for decision making. They include: 
if
if-else statement
if-else if-else chain (don't use if you haven't mastered switch)
nested if statement
switch statement
ternary operator(unless you master it, avoid it.)
if statements with logical operators in conditions
nullish operator (if one is using chrome and they dont have an account, this operator enables them to use it as a guest. Though its only 50% a conditional statement)

2. Loops or iterrational statements; they are in a category of flow charts
a) for loop
b)while loop
c)do-while loop

3. Exceptional Handling
This is for debugging code
Try--catch

4.Transfer control
a)return
b)break
c)continue
*/

//Write an if statement to check if someone is an adult, allow them to vote
/*
let age = prompt("Please enter your age:")
age = Number(age);
if (age>=18) {
    window.alert("Adult identified, eligble to vote")
}
else{
    window.alert("Minor identified,not eligble to vote")
}
*/
/*
let age = prompt("Please enter your age:")
age = Number(age);
if (isNaN(age) || age<0) {
    window.alert("Please enter valid age")
}
else{
    if (age>=18) {
    window.alert("Adult identified, eligble to vote")
}
else{
    window.alert("Minor identified,not eligble to vote")
}
}

//Switch statement
switch(expression){
    case value1:
        //write code when expression === value1
    break
    case value2:
        //write code when expression === value2
    break
    case value3:
        //write codewhen expression === value3
    default:
        //write code non of the code matchs        

}

let paymentType = prompt("Enter Payment method: (Cash, Mobile money, Bank)")
switch(paymentType){
    case "Cash":
        alert("Process cash payment on the counter")
    break;
    case "Mobile money":
        alert("Verify your phone details before delivery")
    break;
    case "Bank":
        alert("Confirm before proceeding")
    break;
    default:
       alert("Unknown method please check again")       
}
       

//if wood store in warehouse
//if its furniture in showroom
let product = prompt("Enter product type: (Wood,Furniture)")
switch(product){
    case "Wood":
        alert("Store in the warehouse")
    break;
    case "Furniture":
        alert("Store in the showroom")
    break;
    default:
       alert("Enter valid product type!")       
}

check discount
regular no discount
wholesale 15%
vip 10%
how can we use switch to control stock?


let number = prompt("Enter Number: )")
switch(true){
    case number>0:
        alert("Number is Positive")
    break;
    case number==0:
        alert("Number is Zero")
    break;
    case number<0:
        alert("Number is Negative")
    break;
    default:
       alert("Enter valid number!")       
}
    

//how can we use the switch to control stock?
let stockCount = prompt("Enter Number of products you want: ")
switch(true){
    case stockCount>0:
        alert("You are lucky, Product available")
    break;
    case stockCount>0 && stockCount<=10:
        alert("We are low on stock")
    break;
    case stockCount===0:
        alert("We are out of stock")
    break;
    default:
       alert("Invalid product!")       
}
*/

//Ternary Operator
//condition ? valueIfTrue: valueIfFalse

let stock = 5
let message = stock > 0 ? "In Stock" : "Out of Stock";

console.log(message);