// write a java script program to get the array of all numbers from the user , and then displaying the middle number from the array of numbers , and at the end get the square of the middle number from the array of numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of All Numbers , Displaying the array of all numbers , displaying the middle number from the array of numbers , and at the end displaying the square of the middle number"
const arrayOfAllNumbers = []
var numbersOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfAllNumbers(arrOfNums , numsOfTerms) {
    console.log("The Number Of Terms Is = ",numsOfTerms," Terms")
    for(var i = 0 ; i < numsOfTerms ; i++){
        numbers = Number(window.prompt("Please Enter The Number Is ("+(i+0)+") Is = "))
        arrOfNums.push(numbers)
    }
    console.log("The Array Of The Numbers Is : ",arrOfNums)
    var middleIndexNumber = Math.floor(numsOfTerms / 2) 
    console.log("The Middle Index Number Is = ",middleIndexNumber)
    var middleNumberFromArrayOfNumbers = arrOfNums[middleIndexNumber]
    console.log("The Middle Number From The Array Of Numbers Is : ",middleNumberFromArrayOfNumbers)
    // var squareOfMiddleNumberFromArrayOfNumbers = middleNumberFromArrayOfNumbers * middleNumberFromArrayOfNumbers
    // var squareOfMiddleNumberFromArrayOfNumbers = Math.pow(middleNumberFromArrayOfNumbers , 2)
    var squareOfMiddleNumberFromArrayOfNumbers = middleNumberFromArrayOfNumbers ** 2
    console.log("The Square Of The Middle Number From The Array Of All Numbers Is = ",squareOfMiddleNumberFromArrayOfNumbers)
} 
getArrayOfAllNumbers(arrayOfAllNumbers , numbersOfTerms)