const number = prompt('Enter a number: ');

if (number < 0) {
	alert(-1);
}
else if (number == 0){
	alert(0);
}
else if (number > 0){
	alert(1);
}
else alert('ERROR')

document.body.style.backgroundColor = "black";

document.getElementById("b1").addEventListener("click", function() { document.body.style.backgroundColor = "red"; });
document.getElementById("b2").addEventListener("click", function() { document.body.style.backgroundColor = "green"; });
document.getElementById("b3").addEventListener("click", function() { document.body.style.backgroundColor = "blue"; });