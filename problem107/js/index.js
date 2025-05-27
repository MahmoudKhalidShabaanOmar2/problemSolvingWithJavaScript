// write a java script program to get the radius of the circle from the user , and then get the area of circle , and the circumference of the circle by using function =>
document.getElementById("mainHeading").innerHTML = "Displaying The Area , And Circumference Of The Circle"
document.getElementById("mainDescription").innerHTML = "Getting The Radius Of The Circle , And Then Dispaying The Area , And Circumference Of The Circle"
var radiusOfCircle = Number(window.prompt("Please Enter The Radius Of The Circle Is = "))
function gettingAreaAndCircumferenceOfCircle(radOfCircle) {
    console.log("The Radius Of The Circle Is = ",radOfCircle)
    // var areaOfCircle = Math.PI * radOfCircle * radOfCircle 
    // var areaOfCircle = Math.PI * Math.pow(radOfCircle , 2)
    var areaOfCircle = Math.PI * radOfCircle ** 2
    console.log("The Area Of The Circle Is = ",areaOfCircle)
    var circumferenceOfCircle = Math.PI * radOfCircle * 2 
    console.log("The Circumference Of The Circle Is = ",circumferenceOfCircle)
}
gettingAreaAndCircumferenceOfCircle(radiusOfCircle)