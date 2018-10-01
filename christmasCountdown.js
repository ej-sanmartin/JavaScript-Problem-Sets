/*
  Write a JavaScript program to calculate days left until next Christmas.
*/

let today = new Date(); // Gets current day
const christmas = new Date(today.getFullYear(), 11, 25);  // Gets Christmas day
if (today.getMonth()==11 && today.getDate()>25){
  christmas.setFullYear(christmas.getFullYear()+1); 
}

const oneDay = 1000*60*60*24; // Calculates the value of one day
console.log(`${Math.ceil((christmas.getTime() - today.getTime())/(oneDay))} days left until Christmas!`);
