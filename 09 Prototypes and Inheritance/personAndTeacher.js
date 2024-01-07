function createPersonAndTeacherClasses() {
    class Person {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
    }
  
    class Teacher extends Person {
      constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
      }
    }
  
    return {
      Person,
      Teacher
    };
  }
  
  const classes = createPersonAndTeacherClasses();
  const { Person, Teacher } = classes;
  
  const person = new Person('John Doe', 'john@example.com');
  const teacher = new Teacher('Alice Smith', 'alice@example.com', 'Math');
  
  console.log(person);
  console.log(teacher);
 