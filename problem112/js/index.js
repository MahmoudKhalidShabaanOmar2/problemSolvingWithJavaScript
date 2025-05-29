// write a java script program to get array Of Numbers , and then get the middle number from the array of numbers , and at the end get the square of the middle number =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of All Numbers , Displaying The Middle Number From Array Of Numbers , And At The End Displaying The Square Of The Middle Number"
const arrayOfNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
for (var i = 0 ; i < numberOfTerms ; i++) {
    var numbers = Number(window.prompt("Please Enter The Number("+(i + 1)+") Is = "))
    arrayOfNumbers.push(numbers)
}
console.log("The Array Of Numbers Is : ",arrayOfNumbers)
var middleIndexNumber = Math.floor(numberOfTerms / 2)
console.log("The Middle Index Number Is = ",middleIndexNumber)
var middleNumberFromArrayOfNumber = arrayOfNumbers[middleIndexNumber]
console.log("The Middle Number From The Array Of Numbers Is = ",middleNumberFromArrayOfNumber)
// var squareOfMiddleNumberFromArrayOfNumber = Math.pow(middleNumberFromArrayOfNumber , 2)
// var squareOfMiddleNumberFromArrayOfNumber = middleNumberFromArrayOfNumber * middleNumberFromArrayOfNumber 
var squareOfMiddleNumberFromArrayOfNumber = middleNumberFromArrayOfNumber ** 2
console.log("The Square Of The Middle Number From The Array Of Numbers Is = ",squareOfMiddleNumberFromArrayOfNumber)