// write a java script program to get the array of the student names in the ascending (properly) sequence after removing the frist , and last student names by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Frist , And Last Student Name From The Array Of Student Names Is : "
var numbersOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
const arrayOfStudentNamesInAscending = []
function getArrayOfStudentNamesInAscending(arrOfStudNamesInAsce , numOfTerms){
    console.log("The Number Of Terms Is : ",numOfTerms," Terms")
    for(var i = 0 ; i < numOfTerms ; i++){
        var studentNames = window.prompt(("Please Enter The Student Name("+(i + 1)+") Is : "))
        arrOfStudNamesInAsce.push(studentNames)
    }
    console.log("The Array Of The Student Names In The Ascending (Properly) Sequence Is : ")
    for(var j = 0 ; j < numOfTerms ; j++){
        console.log(arrOfStudNamesInAsce[j])
    }
    const arrayOfStudentNamesInAscendingAfterRemovingFristLastStudentNames = arrOfStudNamesInAsce.slice(1 , numOfTerms - 1)
    console.log("The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Frist , And Last Student Names From The Array Of Student Names Is : ",arrayOfStudentNamesInAscendingAfterRemovingFristLastStudentNames)
    for(var k = 0 ; k < numOfTerms ; k++){
        console.log(arrayOfStudentNamesInAscendingAfterRemovingFristLastStudentNames[k])
    }
} 
getArrayOfStudentNamesInAscending(arrayOfStudentNamesInAscending , numbersOfTerms)