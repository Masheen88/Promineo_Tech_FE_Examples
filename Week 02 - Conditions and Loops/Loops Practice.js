// this is a basic for loop, uses modulus operator, prints 0 to 100 for even
// numbers
for (let i = 0; i < 100; i++){
  if (i % 2 == 1){
  console.log(i);
  }
  else {
  }
}

//basic while loop
let i = 100;
while ( i < 5 ) {
  //body of the while the loop
  console.log(i) 
  i++;
}

/*
i % 2 == 1
7 % 2 == 1
1 == 1
true
*/

/*

//another while loop
let lightBulbIsOn = true;

while (!lightBulbIsOn){
  console.log("I'm in the while loop");
  lightBulbIsOn = false;
}


console.log(lightBulbIsOn);
console.log(!lightBulbIsOn);
*/

//another for loop
for (let i = 1; i < 10; i++){
  console.log(i);
  if(i % 2 == 1){ 
    console.log('inside the if statement');
    console.log(i)
  }
}




