// EX.3.10

function unique(array) { 
    let result = []; 
    
    for (let str of array) { 
    if (!result.includes(str)) { 
    result.push(str); 
    } 
    } 
    
    return result; 
   } 
    
   let number = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1]; 
    
   number.sort(function (a, b) { return a - b }); 
   alert(unique(number));