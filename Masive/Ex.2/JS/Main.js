let students = [{
    name: "Viorel",
    marks: [4, 5, 6, 4, 4]
},
{
    name: "Victoria",
    marks: [8, 9, 8, 7, 8]
},
{
    name: "Victor",
    marks: [9, 9, 7, 8, 8]
},
{
    name: "Vin D.",
    marks: [10, 8, 9, 9, 7]
},
{
    name: "Vlad",
    marks: [7, 6, 8, 5, 10]
}
];

const marksAverage = [];


// 3.2(a)
const nameAverage = () => {
for (const person of students) {
    console.log(person.name);
    marksAverage.push(person.marks.reduce((accumulator, currentValue) => accumulator + currentValue) / person.marks.length);
    console.log(person.marks);
}

};
nameAverage();
console.log("===============================");
console.log("Students' average marks are:");
console.log(marksAverage[0]);
console.log(marksAverage[1]);
console.log(marksAverage[2]);
console.log(marksAverage[3]);
console.log(marksAverage[4]);
console.log("===============================");

// 3.2(b)

lowerAverage = () => {
for (const person of students) {
    let average = person.marks.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (average / person.marks.length < 5) {
        console.log("The student with the average mark less than 5 is: ");
        console.log(person.name);
    }
}
};

lowerAverage();
console.log("===============================");


// 3.2(c)
marksAverage.sort((a, b) => a - b);
console.log("Min average is:", Math.min(...marksAverage));
console.log("Max average is:", Math.max(...marksAverage));
console.log("===============================");


// 3.2(d)
marksAverage.sort(function(a, b){return b - a});
console.log("There are the students marks in descending order: " + marksAverage);
console.log("===============================");


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
console.log("The group's average is: ")
console.log(average);
console.log("===============================");
console.log("The students with the average mark bigger than group average are: ");
for (const person of students) {
    studentAverage(person.marks) > average ? console.log(person.name) : 0;
}
};

higherAverage(classAverage());