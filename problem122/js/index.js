// write a java script program to get array of student names , and then displaying array of student names in the Descending (Properly) Sequence =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Student Names"
const arrayOfStudentNamesInAscending = []
var numbersOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Numbers Of Terms Is = ",numbersOfTerms," Terms")
console.log("The Array Of Student Names In The Ascending (Properly) Sequence Is : ")
for(var i = 0 ; i <numbersOfTerms ; i++) {
    var studentNames = window.prompt("Please Enter The Student Name("+(i + 1)+") Is : ")
    arrayOfStudentNamesInAscending.push(studentNames)
    console.log(arrayOfStudentNamesInAscending[i])
}
// const arrayOfStudentNamesInDescending = [...arrayOfStudentNamesInAscending].sort((a , b) => b - a)
const arrayOfStudentNamesInDescending = [...arrayOfStudentNamesInAscending].reverse()
console.log("The Array Of Student Names In The Descending (Reversing) Sequence Is : ",arrayOfStudentNamesInDescending)
for(var j = 0 ; j <= numbersOfTerms ; j++) {
    console.log(arrayOfStudentNamesInDescending[j])
}