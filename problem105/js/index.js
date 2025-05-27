// write a java script program to get the circumference of the circle by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Circumference Of The Circle"
document.getElementById("mainDescription").innerHTML = "Getting The Radius Of The Circle , And Then Displaying The Circumference Of The Circle"
var radiusOfCircle = Number(window.prompt("Please Enter The Radius Of The Circle Is = "))
function getCircumferenceOfCircle(radOfCircle) {
    console.log("The Radius Of The Circle Is = ",radOfCircle)
    let circumferenceOfCircle = 2 * Math.PI * radOfCircle 
    console.log("The Circumference Of The Circle Is = ",circumferenceOfCircle)
}
getCircumferenceOfCircle(radiusOfCircle)