// write a java script program to get the acceleration of an object , by using the getting force , and mass of an object =>
document.getElementById("mainHeading").innerHTML = "Getting The Acceleration Of An Object"
document.getElementById("mainDescription").innerHTML = "Getting The Acceleration Of An Object By Using Force , And Mass Of An Object"
var forceOfObject = Number(window.prompt("Please Enter The Force Of An Object Into Newoton Is = "))
var massOfObject = Number(window.prompt("Please Enter The Mass Of An Object Into Kilo Grama Is = "))
console.log("The Force Of An Object Is = ",forceOfObject," Newoton")
console.log("The Mass Of An Object Is = ",massOfObject," Kilograma")
var accelerationOfObject = forceOfObject / massOfObject 
console.log("The Acceleration Of An Object Is = ",accelerationOfObject," Meter/Seconds2")