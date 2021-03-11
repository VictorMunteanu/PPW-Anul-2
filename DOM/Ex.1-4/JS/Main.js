// EX.1
 document.body.style.background = "RED";

// EX.2
setTimeout(() => document.body.style.background = "GREEN", 3000);

// EX.3
document.addEventListener("DOMContentLoaded", () => { 
 console.log("DOM loaded"); 
 const buttonElement = document.getElementById("btn"); 
 console.log(buttonElement); 
 buttonElement.addEventListener("click", () => { 
 document.body.style.backgroundColor = "ORANGE"; 
 }); 
});

// EX.4
setTimeout(() => document.body.style.background = "WHITE", 5000);
const listItems = document.getElementsByTagName("li"); 

let i = 1;
setInterval (() => {
    if (i <= 20){
        const node = document.createElement("LI");
        const textNode = document.createTextNode(`Element ${i}`);
        node.appendChild(textNode);
        document.getElementById("listID").appendChild(node);
        if (i % 2 === 0) {
            node.style.backgroundColor = "LIME";
        } else {
            node.style.backgroundColor = "VIOLET";
        }
        i++;
    }
}, 2000);
