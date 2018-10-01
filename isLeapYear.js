/*
	Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
*/

function isLeapYear(yr){
	let year = (yr % 100 === 0) ? (yr % 400 === 0) : (yr % 4 === 0);
  console.log(year);
  
}

isLeapYear(2004);
