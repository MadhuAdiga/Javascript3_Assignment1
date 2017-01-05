var radius=prompt("Enter the value of radius in cm"); //Alternatively the radius can be assigned as var radius = 5cm;
console.log("The area of the circle of " + radius + "cm radius is " + calculateArea(radius) + " cm2"); // Calls the function calculateArea(radius) wthin a console statement


function calculateArea(rad){ //Takes an argument rad
	var area=Math.PI*rad*rad; //Applies the formula for calculating the area of a circle
	return area; //Return the area value
}