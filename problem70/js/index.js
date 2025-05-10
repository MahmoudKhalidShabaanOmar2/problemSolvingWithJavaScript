// write a java script program to get two numbers from the user , and then swap the two values of the two numbers by using temporary value => 
document.getElementById("mainHeading").innerHTML = "Swapping Values Of Two Numbers"
document.getElementById("mainDescription").innerHTML = "Getting Two Values Of Two Numbers , And Then Swapping The Values Of The Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("Values Of The Two Numbers Before Swapping Values Of Two Numbers Is : ")
console.log("The Frist Number Is = ",fristNumber)
console.log("The Second Number Is = ",secondNumber)
// var temporaryValue = fristNumber 
// fristNumber = secondNumber 
// secondNumber = temporaryValue 
var temporaryValue = secondNumber 
secondNumber = fristNumber 
fristNumber = temporaryValue
console.log("Values Of Two Numbers After Swapping Values Of Two Numbers Is : ")
console.log("The Frist Number Is = ",fristNumber)
console.log("The Second Number Is = ",secondNumber)