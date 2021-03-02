// EX.5

let person = {
  name: "Person",
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: "112",
		email: "email@domain.com"
  },
address: "Moldova"
}

delete person.address;
person.contacts.phone = "+37312345678";
console.log(person);