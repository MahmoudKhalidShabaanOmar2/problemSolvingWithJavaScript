// write a java script program to get the area of the circle =>
document.getElementById("mainHeading").innerHTML = "Displaying The Area Of The Circle Is : "
var radiusOfCircle = Number((window.prompt("Please Enter The Circle Radius Is = ")))
console.log("The Circle Radius Is = ",radiusOfCircle)
var areaOfCircle = Math.PI * Math.pow(radiusOfCircle , 2) 
console.log("The Area Of The Circle Is = ",areaOfCircle)