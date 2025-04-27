// write a java script program to get the force of an object by using function => 
document.getElementById("mainHeading").innerHTML = "Getting The Force Of An Object"
document.getElementById("mainDescription").innerHTML = "Getting The Force Of An Object By Using Acceleration , And Mass Of An Object"
var accelerationOfObject = Number(window.prompt("Please Enter The Acceleration Of An Object Is = "))
var massOfObject = Number(window.prompt("Please Enter The Mass Of An Object Is = "))
function getForceOfObject(m , a){
    console.log("The Mass Of An Object Is = ",m," Kilo Grama")
    console.log("The Acceleration Of An Object Is = ",a," Meter/Seconds2")
    var forceOfObject = m * a
    console.log("The Force Of An Object Is = ",forceOfObject," Newoton")
}
getForceOfObject(massOfObject , accelerationOfObject)