// write a java script program to get the array of numbers from the user , then get the minimum number between the array numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Number , And Then Displaying The Minimum Number From The Array Of Numbers"
const arrayOfNumbers = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfNumbers(arrOfNums , numsOfTerms) {
    console.log("The Number Of Terms Is = ",numsOfTerms," Terms")
    for(var i = 0 ; i < numberOfTerms ; i++){
        var numbers = Number(window.prompt("Please Enter The Number("+(i + 1)+") Is = "))
        arrOfNums.push(numbers)
    }
    console.log("The Array Of Numbers Is : ",arrOfNums)
    var minimumNumberBetweenArrayNumbers = arrOfNums[0]
    for(var j = 0 ; j < numsOfTerms ; j++) {
        console.log(arrOfNums[j])
        if(arrOfNums[j] < minimumNumberBetweenArrayNumbers) {
            minimumNumberBetweenArrayNumbers = arrOfNums[j]
        }
    }
    console.log("The Minimum Number Between Array Numbers Is = ",minimumNumberBetweenArrayNumbers)
}
getArrayOfNumbers(arrayOfNumbers , numberOfTerms)