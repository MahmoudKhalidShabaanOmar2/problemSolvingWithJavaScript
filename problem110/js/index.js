// write a java script program to get the array of numbers , and then dispay the middle number from the array of numbers =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Numbers , And Then Displaying The Middle Number From The Array Of Numbers"
const arrayOfNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
for (var i = 0 ; i < numberOfTerms ; i++) {
    var numbers = Number(window.prompt("Please Enter The Number ("+(i + 1)+") Is = "))
    arrayOfNumbers.push(numbers)
}
console.log("The Array Of All Numbers Is : ",arrayOfNumbers)
var middleIndexNumber = Math.floor(numberOfTerms / 2)
console.log("The Middle Index Number Is = ",middleIndexNumber)
var middleNumberFromArrayOfAllNumbers = arrayOfNumbers[middleIndexNumber]
console.log("The Middle Number From The Array Of All Numbers Is = ",middleNumberFromArrayOfAllNumbers)