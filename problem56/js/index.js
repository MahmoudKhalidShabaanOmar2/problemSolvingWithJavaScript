// write a java script program to get the acceleration of an object by using force , and mass of an object by using function method => 
document.getElementById("mainHeading").innerHTML = "Getting The Acceleration Of An Object"
document.getElementById("mainDescription").innerHTML = "Getting The Acceleration Of An Object By Using Force , And Mass Of An Object"
var forceOfObject = Number(window.prompt("Please Enter The Force Of An Object Is = "))
var massOfObject = Number(window.prompt("Please Enter The Mass Of An Object Is = "))
function getAccelerationOfObject(f , m) {
    console.log("The Force Of An Object Is = ",forceOfObject," Newoton")
    console.log("The Mass Of An Object Is = ",massOfObject," Kilograma")
    var accelerationOfObject = f / m 
    console.log("The Acceleration Of An Object Is = ",accelerationOfObject," Meter/Seconds2")
}
getAccelerationOfObject(forceOfObject , massOfObject)