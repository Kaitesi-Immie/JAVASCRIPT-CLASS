const form = document.getElementById("userForm")
const tablebody= document.querySelector("#userTable tbody")

form.addEventListener("submit",submitForm);
//all  my forms should look like this if they have a submit button.otherwise it'll keep on loading/refreshing  when i hit submit button.

function submitForm(event){
    event.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const age = document.getElementById("age").value;
//create a new row
const newRow = document.createElement("tr")
newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`
//attach to table
tablebody.appendChild(newRow);
//clear form
form.reset();//it clears the form so that it goes back to normal
}
