// write a python program to get the maximum number between two numbers by using max() function =>
document.getElementById("mainHeading").innerHTML = "Get The Maximum Number Between The Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
console.log("The Frist Number Is = ",fristNumber)
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("The Second Number Is = ",secondNumber)
var maximumNumber = Math.max(fristNumber , secondNumber)
console.log("The Maximum Number Between The Two Numbers Is = ",maximumNumber)