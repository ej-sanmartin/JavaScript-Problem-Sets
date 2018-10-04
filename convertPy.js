// Write a JavaScript program to create a new string adding "Py"
// in front of a given string. If the given string begins with "Py"
// then return the original string.

function convertPy(str){
  let check = str.substr(-20, 2).toLowerCase();
	(check === 'py') ? console.log(str) : console.log(`Py${str}`);
}

convertPy('Cookie'); // Output: PyCookie
convertPy('Python'); // Output: Python
