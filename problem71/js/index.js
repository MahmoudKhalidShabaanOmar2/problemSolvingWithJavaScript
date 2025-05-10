// write a java script program to get two numbers from the user , and then swapping the values of the two numbers without using temporary value =>
document.getElementById("mainHeading").innerHTML = "Swapping Values Of Two Numbers Without Using Temporary Value"
document.getElementById("mainDescription").innerHTML = "Getting Values Of Two Numbers , And Then Swapping Values Of Two Numbers Without Using Temporary Value"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("Values Of The Two Number Before Swapping Values Of Two Numbers Is : ")
console.log("The Frist Number Is = ",fristNumber)
console.log("The Second Number Is = ",secondNumber)
fristNumber = fristNumber + secondNumber 
secondNumber = fristNumber - secondNumber 
fristNumber = fristNumber - secondNumber 
console.log("Values Of The Two Numbers After Swapping Values Of Two Numbers Is : ")
console.log("The Frist Number Is = ",fristNumber)
console.log("The Second Number Is = ",secondNumber)