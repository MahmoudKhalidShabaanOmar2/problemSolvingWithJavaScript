// write a java script program to get array of numbers from the user , then get the multiplication of all numbers in the array of all numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of All Numbers , And Then Displaying The Multiplication Of All Numbers From The Array Of All Numbers"
document.getElementById("mainDescription").innerHTML = "Getting The Array Of All Numbers , Then Displaying The Array Of All Numbers , And At The End Displaying The Multiplication Of All Numbers From The Array Of All Numbers"
const arrayOfAllNumbers = []
var numbersOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfAllNumbers(arrOfNums , numOfTerms){
    console.log("The Number Of Terms Is = ",numOfTerms," Terms")
    for (var i = 0 ; i <= numOfTerms ; i++) {
        var allNumbers = Number(window.prompt("Please Enter The Number ("+(i + 1)+") Is = "))
        arrOfNums.push(allNumbers)
    }
    console.log("The Array Of All Numbers Is : ",arrOfNums)
    let multiplicationOfAllNumbersFromArrayOfNumbers = 1
    for (var j = 0 ; j <= numOfTerms ; j++) {
        multiplicationOfAllNumbersFromArrayOfNumbers *= arrOfNums[j]
    }
    console.log("The Multiplication Of All Numbers From The Array Of All Numbers Is = ",multiplicationOfAllNumbersFromArrayOfNumbers)
}
getArrayOfAllNumbers(arrayOfAllNumbers , numbersOfTerms)