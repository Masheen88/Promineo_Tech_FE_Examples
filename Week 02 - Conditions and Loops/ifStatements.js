console.log("nested if statments");

/* Take two numbers and add them together. 
Run through a loop that same number of times. */

//step 1: we need two numbers
//step 2: add the numbers together
//step 3: create a for loop
//step 4: run through the loop the number of times from step 2.

//declares a variable for my first number

let myFirstNumber = 5;
console.log("This is my first number:", myFirstNumber);
firstNumber = true;

//declares a variable for my second number
let mySecondNumber = 6;
console.log("This is my second number:", mySecondNumber);
console.log(myFirstNumber == 5);

/*
This is an if statments to check if a number is equal, 
if it is equal it will then check to see 
if the number is equal and true!
*/
if (myFirstNumber == 5) {
  // is my first number equal to 5
  console.log("This is my first number in the if statments:", myFirstNumber);
  let someAddition = myFirstNumber + mySecondNumber;
  console.log("This adds the two numbers together", someAddition);
  if (myFirstNumber == 5 && firstNumber == true) {
    console.log("Both statments are true", myFirstNumber, firstNumber);
  } else {
    console.log("Both statements are not true");
  }
} else if (mySecondNumber == "john") {
  // checks to see if the variable is equal to john's name.
  console.log("This is my second number in the if statements", mySecondNumber);
} else {
  console.log("These are not my numbers!!!");
}
