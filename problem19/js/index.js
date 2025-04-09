// write a java script program to get three numbers from the user , then get the sum of the three numbers , then get the cube of the three numbers , and at the end get the sum of the cube of the three numbers =>
document.getElementById("mainHeading").innerHTML = "Display Three Numbers , And The Cube Of The Three Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
console.log("The Frist Number Is = ",fristNumber)
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("The Second Number Is = ",secondNumber)
var thirdNumber = Number(window.prompt("Please Enter The Third Number Is = "))
console.log("The Third Number Is = ",thirdNumber)
let sumOfNumbers = fristNumber + secondNumber + thirdNumber 
console.log("The Sum Of The Three Numbers Is = ",sumOfNumbers)
// var cubeOfFristNumber = fristNumber * fristNumber * fristNumber 
// var cubeOfFristNumber = fristNumber ** 3
var cubeOfFristNumber = Math.pow(fristNumber , 3)
console.log("The Cube Of The Frist Number Is = ",cubeOfFristNumber)
// var cubeOfSecondNumber = secondNumber * secondNumber * secondNumber 
// var cubeOfSecondNumber = secondNumber ** 3 
var cubeOfSecondNumber = Math.pow(secondNumber , 3)
console.log("The Cube Of The Second Number Is = ",cubeOfSecondNumber)
// var cubeOfThirdNumber = thirdNumber * thirdNumber * thirdNumber 
// var cubeOfThirdNumber = thirdNumber ** 3 
var cubeOfThirdNumber = Math.pow(thirdNumber , 3)
console.log("The Cube Of The Third Number Is = ",cubeOfThirdNumber)
let sumOfCubeOfNumbers = cubeOfFristNumber + cubeOfSecondNumber + cubeOfThirdNumber
console.log("The Sum Of The Cube Of The Numbers Is = ",sumOfCubeOfNumbers)