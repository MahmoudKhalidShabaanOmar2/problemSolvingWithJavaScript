// write a java script program to get array of all numbers , then display the middle number from the array of all numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of All Numbers , And Then Displaying The Middle Number"
const arrayOfAllNumbers = []
numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfAllNumbers(arrOfNums , numsOfTerms){
    console.log("The Number Of Terms Is = ",numsOfTerms," Terms")
    for (var i = 0 ; i < numsOfTerms ; i++) {
        var numbers = Number(window.prompt("Please Enter The Number("+(i + 1)+") Is = "))
        arrOfNums.push(numbers)
    }
    console.log("The Array Of All Numbers Is : ",arrOfNums)
    var middleIndexNumber = Math.floor(numsOfTerms / 2)
    console.log("The Middle Index Number Is = ",middleIndexNumber)
    var middleNumberFromArrayOfNumbers = arrOfNums[middleIndexNumber]
    console.log("The Middle Number From The Array Of All Numbers Is : ",middleNumberFromArrayOfNumbers)
}
getArrayOfAllNumbers(arrayOfAllNumbers , numberOfTerms)