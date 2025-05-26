// write a java script program to get the area of the circle by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Area Of The Circle Is : "
var radiusOfCircle = Number(window.prompt("Please Enter The Radius Of The Cirlce Is = "))
function getAreaOfCircle(radOfCircle) {
    console.log("The Radius Of The Circle Is = ",radOfCircle)
    // var areaOfCircle = Math.PI * Math.pow(radOfCircle , 2) 
    var areaOfCircle = Math.PI * radOfCircle * radOfCircle 
    console.log("The Area Of The Circle Is = ",areaOfCircle)
}
getAreaOfCircle(radiusOfCircle)