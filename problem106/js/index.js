// write a java script program to get the radius of the circle , and then get the area of circle , and circumference of circle =>
document.getElementById("mainHeading").innerHTML = "Displaying The Area , And Circumference Of The Circle"
document.getElementById("mainDescription").innerHTML = "Getting The Radius Of The Circle , And Then Displaying The Area , And Circumference Of The Circle"
var radiusOfCircle = Number(window.prompt("Please Enter The Radius Of The Circle Is = "))
console.log("The Radius Of The Circle Is = ",radiusOfCircle)
// var areaOfCircle = Math.PI * radiusOfCircle * radiusOfCircle 
// var areaOfCircle = Math.PI * Math.pow(radiusOfCircle , 2)
var areaOfCircle = Math.PI * radiusOfCircle ** 2
console.log("The Area Of The Circle Is = ",areaOfCircle)
var circumferenceOfArea = Math.PI * 2 * radiusOfCircle 
console.log("The Circumference Of The Circle Is = ",circumferenceOfArea)