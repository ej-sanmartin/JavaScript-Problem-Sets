/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Expected Output : 
60°C is 140 °F
45°F is 7.222222222222222°C
*/

// Converts °F to °C
function temperatureToCelsius(f){
	let c = (f - 32) * 5 / 9;
  return console.log(`${f}\xB0F is ${c}\xB0C`);
}

// Converts °C to °F
function temperatureToFahrenheit(c){
  let f = c * 9 / 5 + 32;
  return console.log(`${c}\xB0C is ${f}\xB0F`);
}

temperatureToCelsius(34);
temperatureToFahrenheit(17);
