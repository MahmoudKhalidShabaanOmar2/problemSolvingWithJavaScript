// write a java script program to get array of numbers , and then get the square root of the middle number from the array of numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of All Numbers , And Then Displaying The Square Root Of The Middle Number From The Array Of Numbers"
const arrayOfNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfNumbers(arrOfNums , numsOfTerms) {
    console.log("The Numbers Of Terms Is = ",numsOfTerms," Terms")
    for(var i = 0 ; i < numsOfTerms ; i++) {
        var numbers = Number(window.prompt("Please Enter The Number ("+(i + 1)+") Is = "))
        arrOfNums.push(numbers)
    }
    console.log("The Array Of Numbers Is : ",arrOfNums)
    var middleIndexNumber = Math.floor(numsOfTerms / 2)
    console.log("The Middle Index Number Is = ",middleIndexNumber)
    var middleNumberFromArrayOfNumbers = arrOfNums[middleIndexNumber]
    console.log("The Middle Number From The Array Of All Numbers Is = ",middleNumberFromArrayOfNumbers)
    var squareRootOfMiddleNumberFromArrayOfNumbers = Math.sqrt(middleNumberFromArrayOfNumbers)
    console.log("The Square Root Of The Middle Number From The Array Of Numbers Is = ",squareRootOfMiddleNumberFromArrayOfNumbers)
}
getArrayOfNumbers(arrayOfNumbers , numberOfTerms)