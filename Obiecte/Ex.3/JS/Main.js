// EX.3

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
console.log("Object before function"); 
console.log(menu);
let multiplyNumeric = () => {
    for (let element in menu) {
      if (typeof menu[element] == "number") {
        menu[element] *= 2;
      }
    }
  }

multiplyNumeric(menu);
console.log("Object after function"); 
console.log(menu);