// write a java script program to get the array of the student names , and then displaying the array of the student names in the ascending (properly) sequence after removing frist , and last student names from the array of student names =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Frist Student Name , And Last Student Name From The Array Of Student Names"
var numbersOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numbersOfTerms," Terms")
const arrayOfStudentNamesInAscending = []
for(var i = 0 ; i < numbersOfTerms ; i++){
    var studentNames = window.prompt("Please Enter The Student Name("+(i + 1)+") Is : ")
    arrayOfStudentNamesInAscending.push(studentNames)
}
console.log("The Array Of The Student Names In The Ascending (Properly) Sequence Is : ",arrayOfStudentNamesInAscending)
for(var j = 0 ; j < numbersOfTerms ; j++){
    console.log(arrayOfStudentNamesInAscending[j])
}
const arrayOfStudentNamesInAscendingAfterRemovingFristLastStudentName = arrayOfStudentNamesInAscending.slice(1 , numbersOfTerms - 1)
console.log("The Array Of The Student Names In The Ascending (Properly) Sequence After Removing The Frist Student Name , And Last Student Name From The Array Of The Student Names Is : ",arrayOfStudentNamesInAscendingAfterRemovingFristLastStudentName)
for(var k = 0 ; k < numbersOfTerms ; k++){
    console.log(arrayOfStudentNamesInAscendingAfterRemovingFristLastStudentName[k])
}