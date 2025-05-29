// write a java script program to get array of the numbers , and then get the cube of the middle number from the array of numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Numbers , And Then Displaying The Cube Of The Middle Number From The Array Of Numbers"
const arrayOfNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfNumbers(arrOfNums , numsOfTerms){
    console.log("The Number Of Terms Is = ",numsOfTerms," Terms")
    for(var i = 0 ; i < numsOfTerms ; i++){
        var numbers = Number(window.prompt("Please Enter The Number ("+(i + 1)+" Is = "))
        arrOfNums.push(numbers)
    }
    console.log("The Array Of Numbers Is : ",arrOfNums)
    var middleIndexNumber = Math.floor(numsOfTerms / 2)
    console.log("The Middle Index Number Is = ",middleIndexNumber)
    var middleNumberFromArrayOfNumbers = arrOfNums[middleIndexNumber]
    console.log("The Middle Number From Array of numbers is = ",middleNumberFromArrayOfNumbers)
    var cubeOfMiddleNumberFromArrayOfNumbers = middleNumberFromArrayOfNumbers * middleNumberFromArrayOfNumbers * middleNumberFromArrayOfNumbers 
    console.log("The Cube Of The Middle Number From The Array Of All Numbers Is = ",cubeOfMiddleNumberFromArrayOfNumbers)
}
getArrayOfNumbers(arrayOfNumbers , numberOfTerms)