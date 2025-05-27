// write a java script program to get the circumference of a circle =>
document.getElementById("mainHeading").innerHTML = "Displaying The Circumference Of Circle Is : "
document.getElementById("mainDescription").innerHTML = "Getting The Radius Of The Circle , And Then Getting The Circumference Of The Circle" 
var radiusOfCircle = Number(window.prompt("Please Enter The Radius Of The Circle Is = "))
console.log("The Radius Of The Circle Is = ",radiusOfCircle)
var circumferenceOfCircle = 2 * Math.PI * radiusOfCircle 
console.log("The Circumference Of The Circle Is = ",circumferenceOfCircle)