// write a java script program to get the array from the user , and then displaying the minimum number from the array of numbers =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Numbers , And Then Displaying The Minimum Number From The Array Of Numbers"
const arrayOfNumbers = []
var numbersOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numbersOfTerms," Terms")
for (var i = 0 ; i < numbersOfTerms ; i++){
    var number = Number(window.prompt("Please Enter The Number("+(i + 1)+") Is = "))
    arrayOfNumbers.push(number)
}
console.log("The Array Of Numbers Is : ",arrayOfNumbers)
var minimumNumberBetweenArrayNumbers = arrayOfNumbers[0] 
for (var j = 1 ; j < numbersOfTerms ; j++){
    if(arrayOfNumbers[j] < minimumNumberBetweenArrayNumbers) {
        minimumNumberBetweenArrayNumbers = arrayOfNumbers[j]
    }
}
console.log("The Minimum Number Between Array Numbers Is = ",minimumNumberBetweenArrayNumbers)
