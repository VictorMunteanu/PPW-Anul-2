// EX.5

class User{
    constructor(name, surname, year){
        this._name = name;
        this._surname = surname;
        this._year = year;
    }

    getFullName() {
		return (this._name + " " + this._surname);
	}

    getCourse(){
        let currentDay = new Date();
        let currentYear = currentDay.getFullYear();
        return currentYear - this._year;
    }
}

class Student extends User{
    constructor(name, surname, year){
        super();
        this._name = name;
        this._surname = surname;
        this._year = year;
    }
}

const user = new User("Munteanu", "Victor", 2019);
console.log(user);

const student = new Student("Munteanu", "Mihai", 2019);
console.log(student);
console.log(student._name); 
console.log(student._surname); 
console.log(student.getFullName()); 
console.log(student._year);
console.log(`The ${student.getCourse()} course`);
