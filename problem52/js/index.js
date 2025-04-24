// write a java script program to get mass , and acceleration of an object , and then get the force of an object => 
document.getElementById("mainHeading").innerHTML = "Displaying The Force Of An Object"
document.getElementById("mainDescription").innerHTML = "Getting The Force Of An Object By Using Mass , And Acceleration Of An Object"
var massOfObject = Number(window.prompt("Please Enter The Mass Of An Object Into Kilograma Is = "))
var accelerationOfObject = Number(window.prompt("Please Enter The Acceleration Of An Object Into Meter/Second2 Is = "))
console.log("The Mass Of An Object Is = ",massOfObject," Kilograma")
console.log("The Acceleration Of An Object Is = ",accelerationOfObject," Meter/Second2")
var forceOfObject = massOfObject * accelerationOfObject 
console.log("The force Of The Object Is = ",forceOfObject," Newoton")