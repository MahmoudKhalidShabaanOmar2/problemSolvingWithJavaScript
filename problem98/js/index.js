// write a java script program to get array of numbers from the user , and then get the multiplication of all number inside the array of all numbers =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of All Numbers , And Then Displaying The Multiplication Of All Numbers In The Array"
document.getElementById("mainDescription").innerHTML = "Getting The Array Of All Numbers , And Then Displaying The Array Of All Numbers , And At The End Get The Mupltiplication Of All Numbers Inside The Array Of All Numbers"
const arrayOfAllNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
for (var i = 0 ; i <= numberOfTerms ; i++) {
    var allNumbers = Number(window.prompt("Please Enter The Number ("+(i + 1)+") Is = "))
    arrayOfAllNumbers.push(allNumbers)
}
console.log("The Array Of All Numbers Is : ",arrayOfAllNumbers)
var multiplicationOfAllNumbersInArrayOfNumbers = 1
for (var j = 0 ; j <numberOfTerms ; j++) {
    multiplicationOfAllNumbersInArrayOfNumbers *= arrayOfAllNumbers[j]
}
console.log("The Multiplication Of All Numbers In The Array Of All Numbers Is = ",multiplicationOfAllNumbersInArrayOfNumbers)