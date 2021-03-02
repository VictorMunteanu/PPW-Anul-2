// EX.6

let coordonates = [ {x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined},]; 
 
const sortCoord = (coordonates) => { 
 return coordonates.filter((value, i) => typeof (coordonates[i].x) === 'number' && typeof (coordonates[i].y) === 'number'); 
} 
 
console.log(sortCoord(coordonates));