//Loops

//create an array of numbers hdgffhhjfhgjgjj if the numbers are equal
// gtfjsgfdjgfjgj create a loop apogiasdpoidsghagopdi add numbers together.
//For Loop with Array
console.log("Example 1: For Loop with Array");
let myArrayOfNumbers = [
  { name: "sam", age: 2 },
  2,
  3,
  4,
  5,
  6,
  { name: "bob", age: 5 }, // this element is on object with an age of 5
  8,
  9,
  10,
  20,
];
// This console log shows my array of numbers
console.log("This is an array:", myArrayOfNumbers);
console.log("This is the length of my array:", myArrayOfNumbers.length);
//and loop through it.

// Average equals the sum of all my numbers
// divided by the total number of items in my array.
let countedNumbers = 0;
//This is a loop to iterate through myArrayOfNumbers
for (let index = 0; index < myArrayOfNumbers.length; index++) {
  //This console log shows my index and what number
  //in the array I am at

  console.log(
    "This is my index",
    index,
    "This is my number in the array:",
    myArrayOfNumbers[countedNumbers]
  );
  console.log(
    "This is my number of fruit before I added to it",
    countedNumbers
  );
  countedNumbers += 1;

  console.log("This is my number of fruit after I added to it", countedNumbers);
}

//While Loop with a Number
console.log(`\n Example 2: While Loop with a Number`);

let numberOfApples = 0; //Starts with 0 apples.
let myIndex = 0;

while (numberOfApples < 3) {
  console.log(`\n Index of the while loop:`, numberOfApples);
  numberOfApples++;
  console.log(` You have now this many apples:`, numberOfApples);
}

console.log(` While Loop has ended, Total apples:`, numberOfApples);

//Do While Loop with concatenated numbers
console.log(`\n Example 3: Do While Loop with concatenated numbers`);

let concatenatedNumbers = "";
let index = 0;

do {
  console.log("This is my index for each iteration:", index);
  index = index + 1;
  concatenatedNumbers = concatenatedNumbers + " " + index;
} while (index < 5);

console.log(concatenatedNumbers);

const expr = [1, 3, 5, 4];
switch (expr) {
  case "Oranges":
    console.log("Here are my oranges", 5 + 6);
    break;
  //
  case "Mangoes":
    break;
  //
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  //
  case "Bananas":
    console.log("Woo Bananas!");
    break;
  //
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// For loop to count a number of steps.
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.

  //This is a console log to tell me how many steps I took
  console.log("Walking east one step " + step);
}

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("WalkingTest east one step");
}
let cats1 = "max";
let cats2 = "bobby";

function myCats(a, b) {
  console.log("this is a function", a, b);
}
myCats(cats1, cats2); //This is where the function is called

//The order of parameters makes a difference.
let myCats2 = (b, a) => {
  return console.log("this is an arrow function", a, b);
};
myCats2(cats1, cats2); //This is where the arrow function is called
