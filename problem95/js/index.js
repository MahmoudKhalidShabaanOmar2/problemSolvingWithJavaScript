// write a java script program to get the array of the numbers from the user , and then displaying the array of different numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Numbers"
document.getElementById("mainDescription").innerHTML = "Displaying The Array Of The Numbers"
const arrayOfNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfNumbers(arrOfNums , numOfTerms){
    console.log("The Number Of Terms Is = ",numOfTerms," Terms")
    for (var i = 0 ; i <= numOfTerms ; i++) {
        var numbers = Number(window.prompt("Please Enter The Number "+(i + 1)+" Is = "))
        arrOfNums.push(numbers)
    }
    console.log("The Array Of Numbers Is : ",arrOfNums)
}
getArrayOfNumbers(arrayOfNumbers , numberOfTerms)