function createPerson(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
  
    const person = {
      get firstName() {
        return firstName;
      },
      set firstName(newFirstName) {
        if (isValidFullName(newFirstName + ' ' + lastName)) {
          firstName = newFirstName;
          fullName = `${newFirstName} ${lastName}`;
        }
      },
      get lastName() {
        return lastName;
      },
      set lastName(newLastName) {
        if (isValidFullName(firstName + ' ' + newLastName)) {
          lastName = newLastName;
          fullName = `${firstName} ${newLastName}`;
        }
      },
      get fullName() {
        return fullName;
      },
      set fullName(newFullName) {
        if (isValidFullName(newFullName)) {
          const [newFirst, newLast] = newFullName.split(' ');
          firstName = newFirst;
          lastName = newLast;
          fullName = newFullName;
        }
      },
    };
  
    return person;
  
    function isValidFullName(name) {
      const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
      return nameRegex.test(name);
    }
  }
  

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesl