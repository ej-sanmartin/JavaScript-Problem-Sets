/*
Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
*/

function yearStartsOnASunday(){
  // question asks to search within these years
  for (let year = 2014; year <= 2050; year++){
    const day = new Date(year, 0, 1);
    if( day.getDay() === 0 ){
      console.log(`The year starts on a Sunday on ${year}`);
    }
  }
}

yearStartsOnASunday();
