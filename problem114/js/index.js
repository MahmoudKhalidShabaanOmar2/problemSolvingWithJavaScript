// write a java script program to get array of numbers , and then displaying the square root of the middle number from the array of numbers =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Numbers , And Then Displaying The Square Root Of The Middle Number From Array Of Numbers"
const arrayOfNumbers = []
var numbersOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numbersOfTerms," Terms")
for (var i = 0 ; i < numbersOfTerms ; i++){
    var numbers = Number(window.prompt("Please Enter The Number("+(i + 1)+") Is = "))
    arrayOfNumbers.push(numbers)
}
console.log("The Array Of Numbers Is : ",arrayOfNumbers)
var middleIndexNumber = Math.floor(numbersOfTerms / 2)
console.log("The Middle Index Number Is = ",middleIndexNumber)
var middleNumberFromArrayOfNumbers = arrayOfNumbers[middleIndexNumber]
console.log("The Middle Number From The Array Of Numbers Is = ",middleNumberFromArrayOfNumbers)
var squareRootOfMiddleNumberFromArrayOfNumbers = Math.sqrt(middleNumberFromArrayOfNumbers)
console.log("The Square Root Of The Middle Number From The Array Of Numbers Is = ",squareRootOfMiddleNumberFromArrayOfNumbers)