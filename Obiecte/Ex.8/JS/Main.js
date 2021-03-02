// EX.8

const weekDays = { 
    Mo: "Понедельник", 
    Tu: "Вторник", 
    We: "Среда", 
    Th: "Четверг", 
    Fr: "Пятница", 
    Sa: "Суббота", 
    Su: "Воскресенье", 
   }; 
    
   let translate = (daysOfWeek) => { 
    const weekDaysRo = [ 
    "Luni", 
    "Marti", 
    "Miercuri", 
    "Joi", 
    "Vineri", 
    "Simbata", 
    "Duminica", 
    ]; 
    const daysInRo = Object.entries(daysOfWeek); 
    for (let key in daysInRo) { 
    daysInRo[key][1] = weekDaysRo[key]; 
    } 
    
    return Object.fromEntries(daysInRo); 
   }; 
    
   console.log(translate(weekDays));