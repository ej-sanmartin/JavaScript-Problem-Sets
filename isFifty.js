// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function isFiftyOrSumIsFifty(a, b){
	if(a === 50 || b === 50 || a + b === 50){
  	return console.log(true);
  }
  return console.log(false);
}

isFiftyOrSumIsFifty(25, 25);
isFiftyOrSumIsFifty(50, 25);
isFiftyOrSumIsFifty(25, 24);
