// write a java script program to get the array of the student names , and then displaying the array of the student names in the ascending (Properly) sequence after removing the second student name from the array of the student name by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Second Student Name From The Ending Of The Array Of The Student Names"
var numberOfTerms = Number(window.prompt("Please Enter The Number Of The Terms Is = "))
console.log("The Number Of The Terms Is = ",numberOfTerms," Terms")
const arrayOfStudentNamesInAscending = []
function getArrayOfStudentNamesInAscending(arrOfStudNamesInAsce , numOfTerms){
    console.log("The Number Of Terms Is = ",numOfTerms," Terms")
    for(var i = 0 ; i < numOfTerms ; i++){
        var studentNames = window.prompt("Please Enter The Student Name("+(i + 1)+") Is : ")
        arrOfStudNamesInAsce.push(studentNames)
    }
    console.log("The Array Of The Student Names In The Ascending (Properly) Is : ",arrOfStudNamesInAsce)
    for(var j = 0 ; j < numOfTerms ; j++){
        console.log(arrOfStudNamesInAsce[j])
    }
    const copyOfArrayOfStudentNamesInAscending = arrOfStudNamesInAsce.slice()
    copyOfArrayOfStudentNamesInAscending.splice(copyOfArrayOfStudentNamesInAscending.length - 2 , 1)
    console.log("The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Second Student Name From The Ending Of The Array Of The Student Names Is : ",copyOfArrayOfStudentNamesInAscending)
    for(var k = 0 ; k < numberOfTerms ; k++){
        console.log(copyOfArrayOfStudentNamesInAscending[k])
    }
}
getArrayOfStudentNamesInAscending(arrayOfStudentNamesInAscending , numberOfTerms)