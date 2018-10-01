/*
  Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/

// Used Heron's formula to calculate area of triangle, being only given the sides of a triangle
function areaOfTriangle(side1, side2, side3){
  let perimeter = (side1 + side2 + side3) /2;
  let area = Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
  console.log(area);
}

areaOfTriangle(5, 6, 7);
