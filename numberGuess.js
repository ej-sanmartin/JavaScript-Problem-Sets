/*
	Write a JavaScript program where the program takes a random integer 
  between 1 to 10, the user is then prompted to input a guess number.
  If the user input matches with guess number, the program will display
  a message "Good Work" otherwise display a message "Not matched". 
*/

// Prompts user to input their guess
let guess = parseInt(prompt("Guess a number between 1 and 10.", "Number"));

// Before determinging random, determines if user inputs a valid guess
if(isNaN(guess) == false && guess >= 1 && guess <= 10){
  let correct = Math.floor(Math.random() * 10) + 1;
  if(guess === correct){
    console.log("Lucky guess :p");
  } else {
    console.log("Better luck next time.");
  }
} else {
  // Program is disappointed if user's guess isn't valid
 	console.log("That's not what I'm asking.");
}
