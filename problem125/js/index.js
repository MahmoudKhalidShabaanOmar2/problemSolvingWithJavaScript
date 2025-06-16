// write a java script program to get the array of student names , and then displaying the array in the descending order after removing the frist student name from the array of student names by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Student Names In The Descending After Removing The Frist Student Name"
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
const arrayOfStudentNamesInAscending = []
function getArrayOfStudentNamesInAscending(arrOfStudNamesInAsce , numOfTerms){
    console.log("The Number Of Terms Is = ",numOfTerms," Terms")    
    for(var i = 0 ; i < numberOfTerms ; i++){
        var studentNames = window.prompt("Please Enter The Student Name("+(i + 1)+") Is : ")
        arrOfStudNamesInAsce.push(studentNames)
    }
    console.log("The Array Of Student Names In The Ascending (Properly) Sequence Is : ",arrOfStudNamesInAsce)
    for(var j = 0 ; j < numOfTerms ; j++){
        console.log(arrOfStudNamesInAsce[j])
    }
    const arrayOfStudentNamesInDescending = [...arrOfStudNamesInAsce].reverse()
    console.log("The Array Of Student Names In The Descending (Reversing) Order Is : ",arrayOfStudentNamesInDescending)
    for(var k = 0 ; k < numOfTerms ; k++){
        console.log(arrayOfStudentNamesInDescending[k])
    }
    const arrayOfStudentNamesInAscendingAfterRemovingFristStudentName = arrOfStudNamesInAsce.slice(1 , numOfTerms)
    console.log("The Array Of Student Names In The Ascending (Properly) Sequence After Removing The Frist Student Name Is : ",arrayOfStudentNamesInAscendingAfterRemovingFristStudentName)
    for(var m = 0 ; m < numOfTerms ; m++){
        console.log(arrayOfStudentNamesInAscendingAfterRemovingFristStudentName[m])
    }
    const arrayOfStudentNamesInDescendingAfterRemovingFristStudentName = arrayOfStudentNamesInAscending.slice(1 , numberOfTerms)
    arrayOfStudentNamesInDescendingAfterRemovingFristStudentName.reverse()
    console.log("The Array Of The Student Names After Removing The Frist Student Name In The Reversing (Descending) Sequence Is : ",arrayOfStudentNamesInDescendingAfterRemovingFristStudentName)
    for(var n = 0 ; n < numOfTerms ; n++) {
        console.log(arrayOfStudentNamesInDescendingAfterRemovingFristStudentName[n])
    }
}
getArrayOfStudentNamesInAscending(arrayOfStudentNamesInAscending , numberOfTerms)