// Loop Examples

// Example 1: For Loop with Array
console.log("Example 1: For Loop with Array");
let myArrayOfNumbers = [1, 2, 3, 4, 5, 6, 9, 13, 17, 18, 23]; // Array of numbers

// This console log shows an array of numbers
console.log("This is an array:", myArrayOfNumbers);

// This console log shows the length of the array of numbers
console.log("This is the length of my array:", myArrayOfNumbers.length);

let countedNumbers = 0;
// This is a loop to iterate through myArrayOfNumbers
for (let index = 0; index < myArrayOfNumbers.length; index++) {
  // This console log shows my index and what number in the array I am at
  console.log(
    "This is my index",
    index,
    "This is my number in the array:",
    myArrayOfNumbers[countedNumbers]
  );

  // This conosle log show the ccountedNumbers variable before adding to it.
  console.log(
    "This is my number of fruit before I added to it",
    countedNumbers
  );

  countedNumbers += 1; // Adds +1 to the countedNumbers variable

  // This console log shows the ccountedNumbers variable after adding to it.
  console.log("This is my number of fruit after I added to it", countedNumbers);
}

// Example 2: While Loop with a Number
console.log(`\n Example 2: While Loop with a Number`);

let numberOfApples = 0; // Starts with 0 apples.
let myIndex = 0; // Manual index for the while loop

while (numberOfApples < 3) {
  // This console log shows the number of apples before adding 1
  console.log(`\n Index of the while loop:`, numberOfApples);

  // Adds + 1 to the numberOfApples variable
  numberOfApples++;

  // This console log shows the number of apples after adding 1
  console.log(` You have now this many apples:`, numberOfApples);
}

console.log(` While Loop has ended, Total apples:`, numberOfApples);

// Example 3: Do While Loop with concatenated numbers
console.log(`\n Example 3: Do While Loop with concatenated numbers`);

let concatenatedNumbers = ""; // Declares a blank string
let index = 0; // Manual index for the do while loop

// This is a do while loop to concatenate numbers together
do {
  // This console log shows the index of the do while loop
  console.log("This is my index for each iteration:", index);

  // Adds + 1 to the index variable
  index = index + 1;

  // Concatenates the index to the concatenatedNumbers variable
  concatenatedNumbers = concatenatedNumbers + " " + index;
} while (index < 5);

// This console log shows the concatenated numbers
console.log(
  "Concated numbers after the do while loop has completed:",
  concatenatedNumbers
);

// Example 4: Switch Case with a Number
console.log(`\n Example 4: Switch Case with a Number`);

const expr = "Apples"; // expression is passed into the switch case

// Switch case to determine what is displayed based on the fruit selected.
switch (expr) {
  // This is the case for the expr = "Oranges"
  case "Oranges":
    console.log("Here are my oranges", 5 + 6);
    break;
  // This is the case for the expr "Mangoes"
  case "Mangoes":
    break;
  // This is the case for the expr "Papayas"
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  // This is the case for the expr "Bananas"
  case "Bananas":
    console.log("Woo Bananas!");
    break;
  // This is the default case if the expr is not equal to anything above.
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
