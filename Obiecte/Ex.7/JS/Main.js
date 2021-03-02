// EX.7

let person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
      phone: "112",
      email: "email@domain.com",
    },
    address: "Moldova",
  
    get gName() {
      return this.name;
    },
  
    get gAge() {
      return this.age;
    },
  
    get gSalary() {
      return this.salary;
    },
  
    get gPhone() {
      return this.contacts.phone;
    },
  
    get gMail() {
      return this.contacts.email;
    },
  
    get gAddress() {
      return this.address;
    },
  };
  
  console.log("Person's name: " + person.gName);
  console.log("Person's age: " + person.gAge);
  console.log("Person's salary: " + person.gSalary);
  console.log("Person's phone number: " + person.gPhone);
  console.log("Person's email: " + person.gMail);
  console.log("Person's adress: " + person.gAddress);  