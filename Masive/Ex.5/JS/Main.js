// EX.3.5

square = value => Math.pow(value, 2); 
 
convert = (square, array) => { 
 return array.map(square) 
}; 
 
let arr = [1, 2, 3]; 
console.log(convert(square, arr)); 
console.log(arr);