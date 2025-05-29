// write a java script program to get the array of numbers , and then get the cube of the middle number =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Numbers , And Then Getting The Cube Of The Middle Number From The Array Of Numbers"
const arrayOfNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
for (var i = 0 ; i < numberOfTerms ; i++) {
    var numbers = Number(window.prompt("Please Enter The Number ("+(i + 1)+") Is = "))
    arrayOfNumbers.push(numbers)
}
console.log("The Array Of Numbers Is : ",arrayOfNumbers)
var middleIndexNumber = Math.floor(numberOfTerms / 2)
console.log("The Middle Index Number Is = ",middleIndexNumber)
var middleNumberFromArrayOfNumbers = arrayOfNumbers[middleIndexNumber]
console.log("The Middle Number From Array Of Numbers Is = ",middleNumberFromArrayOfNumbers)
var cubeOfMiddleNumberFromArrayOfNumbers = middleNumberFromArrayOfNumbers * middleNumberFromArrayOfNumbers * middleNumberFromArrayOfNumbers 
console.log("The Cube Of The Middle Number From The Array Of Numbers Is = ",cubeOfMiddleNumberFromArrayOfNumbers)