// write a java script program to get the array of the student names from the user , and then displaying the array of the student names after removing the second student names from the ending of the list of the student names =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Second Student Name From The Ending Of The Array Of The Student Names"
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
const arrayOfStudentNamesInAscending = []
for(var i = 0 ; i < numberOfTerms ; i++){
    var studentNames = window.prompt("Please Enter The Student Name("+(i + 1)+") Is : ")
    arrayOfStudentNamesInAscending.push(studentNames)
}
console.log("The Array Of The Student Names In The Ascending (Properly) Sequence Is : ",arrayOfStudentNamesInAscending)
for(var j = 0 ; j < numberOfTerms ; j++){
    console.log(arrayOfStudentNamesInAscending[j])
}
const copyOfArrayOfStudentNamesInAscending = arrayOfStudentNamesInAscending.slice()
copyOfArrayOfStudentNamesInAscending.splice(copyOfArrayOfStudentNamesInAscending.length - 2 , 1) 
console.log("The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Second Student Name From The Ending Of The Array Of The Student Names Is : ",copyOfArrayOfStudentNamesInAscending)
for(var k = 0 ; k < numberOfTerms ; k++) {
    console.log(copyOfArrayOfStudentNamesInAscending[k])
}