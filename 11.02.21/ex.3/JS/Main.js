document.body.style.backgroundColor = "pink";

var a = prompt('Enter min ');
var b = prompt('Enter max ');

for (let i = a ; i <= b ; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}


document.getElementById("b1").addEventListener("click", function() { document.body.style.backgroundColor = "red"; });
document.getElementById("b2").addEventListener("click", function() { document.body.style.backgroundColor = "green"; });
document.getElementById("b3").addEventListener("click", function() { document.body.style.backgroundColor = "blue"; });