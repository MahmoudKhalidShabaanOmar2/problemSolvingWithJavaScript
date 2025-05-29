// write a java script program to get array of numbers , and then displaying the maximum number between array numbers =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Numbers , And Then Displaying The Maximum Number Between Array Numbers"
const arrayOfNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of The Terms Is = ",numberOfTerms," Terms")
for (var i = 0 ; i < numberOfTerms ; i++){
    var numbers = Number(window.prompt("Please Enter The Number ("+(i + 1)+") Is = "))
    arrayOfNumbers . push(numbers)
}
console.log("The Array Of Numbers Is : ",arrayOfNumbers)
var maximumNumberBetweenArrayNumbers = []
for (var j = 0 ; j < numberOfTerms ; j++){
    if(arrayOfNumbers[j] > maximumNumberBetweenArrayNumbers) {
        maximumNumberBetweenArrayNumbers = arrayOfNumbers[j]
    }
}
console.log("The Maximum Number Between The Array Numbers Is = ",maximumNumberBetweenArrayNumbers)