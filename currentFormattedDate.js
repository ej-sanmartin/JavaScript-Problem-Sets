/*
  Write a JavaScript program to display the current day and time in the following format.
  Today is : Tuesday. 
  Current time is : 10 PM : 30 : 38
*/

function currentDate(){
  let day = new Date();
  // Returns a number representing day of the week (ex: 0 = Sunday, 1 = Monday, etc)
  let dayOfWeek = day.getDay();
  let dOW = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"};
  let dayName = "";
  let countDOA = 0;
  // Case for if it is Sunday and dayOfWeek and countDOA are already the same, sets dayName to string "Sunday"
  if(dayOfWeek === countDOA){
    dayName = dOW[0];
  }
  // loops up, if matches then sets dayName to corresponding day from dOW object
  while(dayOfWeek !== countDOA){
    if(dayOfWeek === countDOA){
  	  dayName = dOW[countDOA];
    }
    countDOA++;
  }
  let hours = day.getHours();
  // Since question doesn't expect military time, checks hours and changes output accordingly between AM and PM
  let hour = (hours >= 12)? hours = `${hours - 12} PM` :	hours = `${hours} AM`;
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();
  // Checks for Noon and Midnight
  if(hour === 0 && minutes === 0 && seconds === 0){
    return console.log("Midnight");
  }
  if(hour === 12 && minutes === 0 && seconds === 0){
    return console.log("Noon");
  }
  console.log(`Today is : ${dayName} \nCurrent time is : ${hour} : ${minutes} : ${seconds}`);
}

currentDate();
