document.body.style.backgroundColor = "black";

//let age = prompt('Enter your age ');
//if (14 <= age && age <= 90) {
//	alert('TRUE');
//} else alert('FALSE');

let age = prompt('Enter your age ');
if (!(14 <= age && age <= 90)) {
	alert('FALSE');
} else alert('TRUE');


document.getElementById("b1").addEventListener("click", function() { document.body.style.backgroundColor = "red"; });
document.getElementById("b2").addEventListener("click", function() { document.body.style.backgroundColor = "green"; });
document.getElementById("b3").addEventListener("click", function() { document.body.style.backgroundColor = "blue"; });