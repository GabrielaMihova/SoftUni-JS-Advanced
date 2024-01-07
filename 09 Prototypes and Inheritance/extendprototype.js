function addSpeciesInfoToClass(Class) {
    Class.prototype.species = "Human";
    Class.prototype.toSpeciesString = function () {
      return `I am a ${this.species}. ${this.toString()}`;
    };
  }
  
  // Example:
  
  // Define a sample class
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    toString() {
      return `My name is ${this.name}`;
    }
  }
  
  // Attach species info to the class
  addSpeciesInfoToClass(Person);
  
  // Create an instance of the class
  const person = new Person("John");
  
  // Call the toSpeciesString method
  console.log(person.toSpeciesString()); // Output: "I am a Human. My name is John"
 