// write a java script program to get the array of numbers , and then displaying the maximum number from the array of numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Numbers , And Then Displaying The Maximum Number From The Array Of Numbers"
const arrayOfNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfNumbers(arrOfNums , numsOfTerms){
    console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
    for (var i = 0 ; i < numsOfTerms ; i++) {
        var numbers = Number(window.prompt("Please Enter The Number("+(i + 1)+") Is = "))
        arrOfNums.push(numbers)
    }
    console.log("The Array Of Numbers Is : ",arrOfNums)
    var minimumNumberBetweenArrayNumbers = []
    for (var j = 0 ; j < numsOfTerms ; j++) {
        if(arrayOfNumbers[j] > minimumNumberBetweenArrayNumbers) {
            minimumNumberBetweenArrayNumbers = arrayOfNumbers[j]
        }
    }
    console.log("The Minimum Number From The Array Of Numbers Is = ",minimumNumberBetweenArrayNumbers)
}
getArrayOfNumbers(arrayOfNumbers , numberOfTerms)