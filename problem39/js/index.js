// write a java script program to get number from the user , and then get the previous number , and next number from the user => 
document.getElementById("mainHeading").innerHTML = "Displaying The Number , Previous Number , And At The End Next Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Is = ",number)
var previousNumber = number - 1
console.log("The Previous Number Is = ",previousNumber)
var nextNumber = number + 1 
console.log("The Next Number Is = ",nextNumber)