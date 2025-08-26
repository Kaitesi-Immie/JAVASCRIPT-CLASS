// object = A collection of related properties and methods
// can represent real world objects (people, products, places)
//object = {key: value
//function}.
// //creating an empty object
let emptyObject = {};
console.log(emptyObject);

// //creating an object with values
let person = {
  firstName: "Martina",
  lastName: "Namutebi",
  age: 22,
  district: "Wakiso",
  isStudent: true,
};

person.maritalStatus = "single";
person["hobby"] = "bird sighting";

console.log(person);

//getting values from an object
console.log(person.age); //dot notation
console.log(person["firstName"]); //bracket notation


// creating object methods
let person2 = {
name : "Mulungi",
classification : "man",
sayHello : function(){console.log("Hi! my name is Alexa")},
}
person2.sayHello();
// let person3 = {
//   name: "Mulungi",
//   classification: "man",
//   sound: () => console.log("talks"),
// }
    
  

// person2.sound();

//     return "talks";
// }
// }
// console.log(person2.sound());

// //setting new key for an object
// person.maritalStatus = "single"; //dot notation
// person["hobby"] = "watching movies"; // bracket notation

// //object methods
let student = {
  name: "Martina",
  level: "Beginner",
  introduce: function () {
    return `Hi, I am ${this.name} and I am a ${this.level} JavaScript student`;
  },
};

console.log(student.introduce());


// //how it is put in real life (your project)
// let product = {
//   name: "dresserDrawer",
//   price: 1000000,
//   inStock: true,
//   display: function () {
//     return ${this.name} costs UGX ${this.price};
//   },
// };

// console.log(product.display());