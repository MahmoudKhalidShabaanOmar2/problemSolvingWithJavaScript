// write a java script program to get the array of the student names , and then displaying the array of the student names in the descending order after removing the last student name =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Student Names After Removing The Last Student Name"
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
const arrayOfStudentNamesInAscending = []
for(var i = 0 ; i < numberOfTerms ; i++){
    var studentNames = window.prompt("Please Enter The Student Name("+(i + 1)+") Is : ")
    arrayOfStudentNamesInAscending.push(studentNames)
}
console.log("The Array Of Student Names In The Ascending (Properly) Sequence Is : ",arrayOfStudentNamesInAscending)
for(var j = 0 ; j < numberOfTerms ; j++){
    console.log(arrayOfStudentNamesInAscending[j])
}
const arrayOfStudentNamesInAscendingAfterRemovingLastStudentName = arrayOfStudentNamesInAscending.slice(0 , numberOfTerms - 1)
console.log("The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Last Student Name Is : ",arrayOfStudentNamesInAscendingAfterRemovingLastStudentName)
for(var k = 0 ; k < numberOfTerms ; k++) {
    console.log(arrayOfStudentNamesInAscendingAfterRemovingLastStudentName[k])
}
const arrayOfStudentNamesInDescendingAfterRemovingLastStudentName = arrayOfStudentNamesInAscendingAfterRemovingLastStudentName.reverse()
console.log("The Array Of Student Names In The Descending (Reversing) Sequence After Removing The Last Student Name Is : ",arrayOfStudentNamesInDescendingAfterRemovingLastStudentName)
for(var m = 0 ; m < numberOfTerms ; m++){
    console.log(arrayOfStudentNamesInDescendingAfterRemovingLastStudentName[m])
}