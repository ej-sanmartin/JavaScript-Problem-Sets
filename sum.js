// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.

function sum(a, b){
	a === b ? console.log((a + b) * 3) : console.log(a + b);
}

sum(2, 2);
sum(2, 3);
