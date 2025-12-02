const people = ["Aaron", "Mel", "John"]; // array
const one = 1; // number
const str = "Hello World"; // string
const b = true; // boolean
const employee = {
  firstName: "Kainapat",
  lastName: "Suwannahote",
}; // object

function sayHello(person) {
  // function
  console.log("Hello " + person.firstName);
}

console.log(typeof people); // check the type of people
console.log(typeof sayHello); // check the type of sayHello
console.log(employee instanceof Array); // check if employee is an array
sayHello(employee); // call the function