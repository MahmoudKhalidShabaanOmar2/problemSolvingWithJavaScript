// write a java script program to get the number from the user , and then get the remainder between the two numbers =>
document.getElementById("mainHeading").innerHTML = "Displaying The Remainder Between The Two Number Is : "
document.getElementById("mainDescription").innerHTML = "Getting Two Numbers From The User , And Then Getting The Remainder Between The Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second NUmber Is = "))
console.log("The Values Of The Two Numbers Is : ")
console.log("The Frist Number Is = ",fristNumber)
console.log("The Second Number Is = ",secondNumber)
var remainder_between_numbers = fristNumber % secondNumber 
console.log("The Remainder Between The Two Numbers Is = ",remainder_between_numbers)