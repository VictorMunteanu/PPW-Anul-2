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

// EX.4(trebue de găsit setTimeout())
setTimeout(() => document.body.style.background = "WHITE", 5000);
const listItems = document.getElementsByTagName("li"); 

const listAdd = () => {
for (let j = 1; j <= 20; j++) {
    let node = document.createElement("LI");                        
    let textnode = document.createTextNode(`Element ${j}`);         
    node.appendChild(textnode);                                     
    document.getElementById("listID").appendChild(node);            
    
}

let i = 0; 
for (const item of listItems) { 
 if(i % 2 === 0) { 
 item.style.backgroundColor = "green"; 
 } else {
    item.style.backgroundColor = "violet"; 
 }
 i++; 
}
}

listAdd();
