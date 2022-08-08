// Function Examples
console.log("FUnction Examples");

//Fuunction to add two numbers together
function addNumbers(a, b) {
  console.log("logs paramater a:", a); // logs the value of a

  console.log("logs paramater a:", b); // logs the value of b

  return a + b; //returns the sum of the two numbers
}

/* 
1 = parameter a, 2 = parameter b
calls addNumbers function and prints the result to the console
 */
console.log(addNumbers(1, 2));

// Function to display a name
function returnMyName(lastName, firstName) {
  return firstName + " " + lastName; // returns the full name
}

console.log(returnMyName("Smith", "John")); // calls the function and prints the result to the console

// Array Examples
console.log("Array Examples");

let arrayOfNumbers = [1, 2, 3, 4, 5];
let arrayOfStrings = ["a", "b", "c", "d", "e"];
let arrayOfBooleans = [true, false, true, false, true];
let arrayOfMixed = [1, "a", true, "b", false];

console.log("Array of numbers:", arrayOfNumbers); // logs the array of numbers
console.log("Array of strings:", arrayOfStrings); // logs the array of strings
console.log("Array of booleans:", arrayOfBooleans); // logs the array of booleans
console.log("Array of mixed:", arrayOfMixed); // logs the array of mixed
