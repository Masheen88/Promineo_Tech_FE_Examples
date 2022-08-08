// A class of that represents a person.
class Person {
  constructor(someName, someAge) {
    this.name = someName;
    this.age = someAge;
    this.pet = [];
  }

  // A function that prints a greeting to the console.
  sayHello() {
    console.log(`Hello, my name is ${this.name}`); // logs the name of the person
  }

  sayGoodbye() {
    console.log(`Goodbye, my name is ${this.name}`); // logs the name of the person
  }

  sayAnotherGreeting() {
    console.log(
      `Hello, my name is ${this.name}, I'm ${this.age} and I have a basketball game tomorrow.`
    ); // logs the name of the person
  }
}

class Pet {
  constructor(somePetName) {
    this.petName = somePetName;
  }

  sayPetName() {
    console.log(`My Pet's name is ${this.petName}`);
  }
}

let Matthew = new Person("John", 25); // creates a new person object
let MatthewsPet = new Pet("Darcy"); // creates a new pet object
// Push MatthewsPet into Matthew's pet array
Matthew.pet.push(MatthewsPet);

let Jen = new Person("Jen", 24); // creates a new person object

Matthew.sayHello(); // calls the sayHello function
MatthewsPet.sayPetName(); // calls the sayPetName function
console.log("Matthew's pet array:", Matthew.pet); // logs the pet array

Matthew.sayGoodbye(); // calls the sayGoodbye function

Jen.sayAnotherGreeting(); // calls the sayAnotherGreeting function
