// write a java script program to get two numbers from the user , then get the sum of the two numbers , get the square of the two numbers , and at the end get the sum of the two numbers =>
document.getElementById("mainHeading").innerHTML = "displays two numbers , and square of two numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
console.log("The Frist Number Is = ",fristNumber)
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("The Second Number Is = ",secondNumber)
let sumOfNumbers = fristNumber + secondNumber 
console.log("The Sum Of The Two Numbers Is = ",sumOfNumbers)
var squareOfFristNumber = fristNumber * fristNumber 
console.log("The Square Of The Frist Number Is = ",squareOfFristNumber)
var squareOfSecondNumber = secondNumber * secondNumber 
console.log("The Square Of The Second Number Is = ",squareOfSecondNumber)
let sumOfSquareOfNumbers = squareOfFristNumber + squareOfSecondNumber 
console.log("The Sum Of The Square Of The Numbers Is = ",sumOfSquareOfNumbers)