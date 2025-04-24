// write a java script program to get the mass of an object by using the force , and acceleration of an object =>
document.getElementById("mainHeading").innerHTML = "Displaying The Mass Of An Object"
document.getElementById("mainDescription").innerHTML = "Displaying The Mass Of An Object , By Using Acceleration , And Force Of An Object"
var forceOfObject = Number(window.prompt("Please Enter The Force Of An Object Into Newoton Is = "))
var accelerationOfObject = Number(window.prompt("Please Enter The Acceleration Of An Object Into Meter/Second2 Is = "))
console.log("The Force Of An Object Is = ",forceOfObject," Newoton")
console.log("The Acceleration Of An Object Is = ",accelerationOfObject," Meter/Seconds2")
var massOfObject = forceOfObject / accelerationOfObject 
console.log("The Mass Of An Object Is = ",massOfObject," Kilograma")