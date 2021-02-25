document.body.style.backgroundColor = "blue";

let students = [{
    name: "Vitalic",
    marks: [4, 5, 6, 4, 4]
},
{
    name: "Tudor",
    marks: [8, 9, 8, 7, 8]
},
{
    name: "Andrei",
    marks: [9, 9, 7, 8, 8]
},
{
    name: "Victor",
    marks: [10, 8, 9, 9, 5]
},
{
    name: "Alexandru",
    marks: [7, 6, 8, 5, 10]
}
];

// 3.2(a)
nameAverage = () => {
for (const person of students) {
    console.log(person.name);
    let average = person.marks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    console.log(average / person.marks.length);
}
};

// 3.2(b)

lowerAverage = () => {
for (const person of students) {
    let average = person.marks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    if (average / person.marks.length < 5) {
        console.log("Studentul cu media mai mica de 5: ");
        console.log(person.name);
    }
}
};

// 3.2(c)
console.log(Math.min(marks.average));
// 3.2(d)

// 3.2(e)
classAverage = () => {
let average = 0;
for (const person of students) {
    average += studentAverage(person.marks);
}
return average / students.length
};

studentAverage = array => {
return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0) / array.length;
};

higherAverage = (average) => {
console.log("Media pe clasa este:")
console.log(average);
console.log("Studentii cu medie mai mare: ");
for (const person of students) {
    studentAverage(person.marks) > average ? console.log(person.name) : 0;
}
};

nameAverage();
console.log();
lowerAverage();
console.log();
console.log();
console.log();
higherAverage(classAverage());