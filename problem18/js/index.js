// write a java script program to get number from the user , and then get the cube of the number =>
document.getElementById("mainHeading").innerHTML = "Display The Number , And Also Display The Cube Of The Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Is = ",number)
// var cubeOfNumber = number * number * number 
// var cubeOfNumber = number ** 3
var cubeOfNumber = Math . pow(number , 3) 
console.log("The Cube Of The Number Is = ",cubeOfNumber)