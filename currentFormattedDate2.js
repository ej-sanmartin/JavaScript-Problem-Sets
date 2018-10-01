/*
  Write a JavaScript program to get the current date.
  Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

*/

function currentDate(){
	let today = new Date();
  let day = today.getDate();
	let month = today.getMonth()+1;
	let year = today.getFullYear();
  // Keeps format consistant if day is single digit
  if(day < 10){
    day = `0${day}`;
	}
  // Keeps format consistant if month is single digit
	if(month < 10){
    month = `0${month}`;
	} 
	console.log(`${month}/${day}/${year}`);
}

currentDate();
