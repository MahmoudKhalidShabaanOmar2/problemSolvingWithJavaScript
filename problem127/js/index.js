// write a java script program to get the array of the student names , and then displaying the array of the student names in the descending seqence after removing the last student name by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Student Names In The Descending (Reversing) Sequence After Removing The Last Student Name Is : "
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
const arrayOfStudentNamesInAscending = []
function getArrayOfStudentNamesInAscending(arrOfStudNamesInAsce , numOfTerms) {
    for(var i = 0 ; i < numOfTerms ; i++){
    var studentNames = window.prompt("Please Enter The Student Name("+(i + 1)+") Is : ")
    arrOfStudNamesInAsce.push(studentNames)
    }
    console.log("The Array Of The Student Names In The Ascending (Properly) Sequence Is : ",arrOfStudNamesInAsce)
    for(var j = 0 ; j < numOfTerms ; j++){
        console.log(arrOfStudNamesInAsce[j])
    }
    const arrayOfStudentNamesInDescending = [...arrOfStudNamesInAsce].reverse()
    console.log("The Array Of The Student Names In The Descending (Reversing) Sequence Is : ",arrayOfStudentNamesInDescending)
    for(var k = 0 ; k < numOfTerms ; k++){
        console.log(arrayOfStudentNamesInDescending[k])
    }
    const arrayOfStudentNamesInAscendingAfterRemovingLastStudentName = arrOfStudNamesInAsce.slice(0 , numberOfTerms - 1)
    console.log("The Array Of The Student Names In The Ascending (Properly) After Remnoving The Last Student Name Is : ",arrayOfStudentNamesInAscendingAfterRemovingLastStudentName)
    for(var m = 0 ; m < numOfTerms ; m++){
        console.log(arrayOfStudentNamesInAscendingAfterRemovingLastStudentName[m])
    }
    const arrayOfStudentNamesInDescendingAfterRemovingLastStudentName = arrOfStudNamesInAsce.slice(0 , numOfTerms - 1)
    arrayOfStudentNamesInDescendingAfterRemovingLastStudentName.reverse()
    console.log("The Array Of The Student Names In The Descending (Reversing) Sequence After Removing The Last Student Name Is : ",arrayOfStudentNamesInDescendingAfterRemovingLastStudentName)
    for(var n = 0 ; n < numOfTerms ; n++){
        console.log(arrayOfStudentNamesInDescendingAfterRemovingLastStudentName[n])
    }
}
getArrayOfStudentNamesInAscending(arrayOfStudentNamesInAscending , numberOfTerms)