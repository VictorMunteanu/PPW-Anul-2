// EX.2

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
// delete salaries.John;
// delete salaries.Ann;
// delete salaries.Pete;
let sum = 0;
if (Object.keys(salaries).length === 0 && salaries.constructor === Object) {
    console.log(sum);
} else {
    sum = Object.values(salaries).reduce((a, b) => a + b, 0);
    console.log(sum);
}
