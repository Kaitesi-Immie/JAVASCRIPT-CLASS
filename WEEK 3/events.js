/* What is an event? Is a triggered action by a user or browser which can result into signals, notifications etc 
key words used;
1. Event listening: Click (buttons are alwways watching/listening to an event)
*/

/*let button = document.getElementById("click"); //this line is forselecting abutton

button.addEventListener("click", ()=>    //this line is for adding a function to he button
    window.alert("You have clicked the button")
);*/

/*let price = Number(document.getElementById("price").value);
let qty = Number(document.getElementById("qty").value);
let total = document.getElementById("total");
let calcBtn = document.getElementById("calcBtn");

function updateTotal(){
let cost = price * qty;
cost.toLocaleString();
total.textcontent = `total:ugx $(cost)
return;
};

price.addEventListener("input", updateTotal)
calcBtn.addEventListener("click", updateTotal)*/

const form = document.getElementById("orderform");
const furniture = document.getElementById("furniture");
const customer = document.getElementById("customer");
const total = document.getElementById("total");
const calcBtn = document.getElementById("calcBtn");

function updateTotal() {
  const price = +document.getElementById("price").value;
  const qty = +document.getElementById("qty").value;
  total.textContent = `Total: UGX ${(price * qty).toLocaleString()}`;
}

document.getElementById("price").addEventListener("input", updateTotal);
document.getElementById("qty").addEventListener("input", updateTotal);
calcBtn.addEventListener("click", updateTotal);



