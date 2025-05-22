// write a java script program to get the array of the numbers , and then getting the sum of all numbers inside the array of numbers =>
document.getElementById("mainHeading").innerHTML = "Displaying Array Of Numbers , And Finally Displaying The Sum Of All Numbers Inside The Array Of Numbers"
document.getElementById("mainDescription").innerHTML = "Getting Array Of Numbers , And Displaying The Array Of Different Numbers , And Finally Displaying The Sum Of All Numbers Inside The Array Of All Numbers"
const arrayOfNumbers = []
var numbersOfTerms = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Of Terms Is = ",numbersOfTerms," Terms")
for (var i = 0 ; i <= numbersOfTerms ; i++) {
    var numbers = Number(window.prompt("Please Enter The Number "+(i + 1)+" Is = "))
    arrayOfNumbers.push(numbers)
}
console.log("The Array Of All Numbers Is : ",arrayOfNumbers)
let sumOfAllNumbersInsideArray = 0
for (var j = 0 ; j <= numbersOfTerms ; j++){
    sumOfAllNumbersInsideArray += arrayOfNumbers[j]
}
console.log("The Sum Of All Numbers Inside The Array Of Numbers Is = ",sumOfAllNumbersInsideArray)