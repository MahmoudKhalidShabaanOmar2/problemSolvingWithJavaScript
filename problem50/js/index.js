// write a java script program to get number from the user , and then get the ceiling of the number =>
document.getElementById("mainHeading").innerHTML = "Ceiling Of Number"
document.getElementById("mainDescription").innerHTML = "Displaying The Ceiling Of The Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Is = ",number)
var ceilingOfNumber = Math.ceil(number)
console.log("The Ceiling Of The Number Is = ",ceilingOfNumber," , Because Your Entered Number Is = ",number)