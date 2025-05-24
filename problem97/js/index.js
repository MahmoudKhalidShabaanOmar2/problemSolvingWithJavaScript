// write a java script to get array of numbers , and then get the sum of all numbers inside the array of the numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Numbers , And The Sum Of All Numbers Inside Array Of All Numbers"
document.getElementById("mainDescription").innerHTML = "Getting The Array Of All Number From The User , Then Displaying The Array Of All Numbers , And At The End Get The Sum Of All Numbers Inside The Array Of Different Numbers"
const arrayOfDifferentNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfDifferentNumbers(arrOfNums , numOfTerms){
    console.log("The Number Of Terms Is = ",numOfTerms," Terms")
    for (var i = 0 ; i < numOfTerms ; i++) {
        let allNumbers = Number(window.prompt("Please Enter The Number "+(i + 1)+" Is = "))
        arrOfNums.push(allNumbers)
    }
    console.log("The Array Of All Numbers ",arrOfNums)
    var sumOfAllNumbersInArrayOfNumbers = 0
    for (var j = 0 ; j < numOfTerms ; j++) {
        sumOfAllNumbersInArrayOfNumbers += arrOfNums[j]
    }
    console.log("The Sum Of All Numbers In The Array Of The Numbers Is = ",sumOfAllNumbersInArrayOfNumbers)
}
getArrayOfDifferentNumbers(arrayOfDifferentNumbers , numberOfTerms)