// EX.2

class Person {
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
    }

    getName(){
        return this._name;
    }

    getSurname(){
        return this._surname;
    }

    setSurname(newSurname){
        return this._surname = newSurname;
    }
}

let person = new Person("Munteanu", "Victor");
console.log(person.getName());
console.log(person.getSurname());
console.log(person.setSurname("Viorel"));
console.log(person.getSurname());
