// write a java script program to get array of student names , and then removing the frist element from the array of student names in the descending sequence =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Student Names After Removing The Frist Student Name"
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
const arrayOfStudentNamesInAscending = []
for(var i = 0 ; i < numberOfTerms ; i++) {
    var studentNames = window.prompt("Please Enter The Student Name("+(i + 1)+") Is : ")
    arrayOfStudentNamesInAscending.push(studentNames)
}
console.log("The Array Of Student Names In The Ascending (Properly) Sequence Is : ",arrayOfStudentNamesInAscending)
for(var j = 0 ; j < numberOfTerms ; j++){
    console.log(arrayOfStudentNamesInAscending[j])
}
const arrayOfStudentNamesInDescending = [...arrayOfStudentNamesInAscending].reverse()
console.log("The Array Of The Student Names In The Descending (reversing) Sequence Is : ",arrayOfStudentNamesInDescending)
for(var k = 0 ; k < numberOfTerms ; k++) {
    console.log(arrayOfStudentNamesInDescending[k])
}
const arrayOfStudentNamesInAscendingAfterRemovingFristStudentName = arrayOfStudentNamesInAscending.slice(1 , numberOfTerms)
console.log("The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Frist Student Name Is : ",arrayOfStudentNamesInAscendingAfterRemovingFristStudentName)
for(var n = 0 ; n < numberOfTerms ; n++){
    console.log(arrayOfStudentNamesInAscendingAfterRemovingFristStudentName[n])
}
const arrayOfStudentNamesInDescendingAfterRemovingFristStudentName = arrayOfStudentNamesInAscending.slice(1 , numberOfTerms)
arrayOfStudentNamesInDescendingAfterRemovingFristStudentName.reverse()
console.log("The Array Of Student Names In The Descending (Reversing) Sequence After Removing The Frist Student Name Is : ",arrayOfStudentNamesInDescendingAfterRemovingFristStudentName)
for(var m = 0 ; m < numberOfTerms ; m++){
    console.log(arrayOfStudentNamesInDescendingAfterRemovingFristStudentName[m])
}