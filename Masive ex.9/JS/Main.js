// EX.3.9

const numbers = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100]; 
 
function isNumber(num) { 
 for( let i = 0; i < numbers.length; i++) { 
 if ( typeof num !== 'number') { 
 return false; 
 } else if ( num > 9) { 
 return false; 
 } 
 } 
 return num; 
} 
 
console.log(numbers.filter(isNumber));