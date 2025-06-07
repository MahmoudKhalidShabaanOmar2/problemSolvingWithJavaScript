// write a java script program to get the array of student names , and then displaying the array of students in the descending sequence by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Student Names In The Descending (Reeversing) Sequence"
const arrayOfStudentNamesInAscending = []
var numbersOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfStudentNamesInAscending(arrOfStudNamesInAsce , numsOfTerms) {
    console.log("The Number Of Terms Is = ",numsOfTerms," Terms")
    for (var i = 0  ; i < numbersOfTerms ; i++) {
        var studentNames = window.prompt("Please Enter The Student Name("+(i + 1)+") Is : ")
        arrOfStudNamesInAsce.push(studentNames)
    }
    console.log("The Array Of Student Names In The Ascending (Properly) Sequence Is : ",arrOfStudNamesInAsce)
    for(var j = 0 ; j < numsOfTerms ; j++) {
        console.log(arrOfStudNamesInAsce[j])
    }
    // const arrOfStudNamesInDesc = [...arrOfStudNamesInAsce].sort((a , b) => b - a) 
    const arrOfStudNamesInDesc = [...arrOfStudNamesInAsce].reverse()
    console.log("The Array Of Student Names In The Descending (Reversing) Sequence Is : ",arrOfStudNamesInDesc)
    for(var k = 0 ; k < numsOfTerms ; k++) {
        console.log(arrOfStudNamesInDesc[k])
    }
}
getArrayOfStudentNamesInAscending(arrayOfStudentNamesInAscending , numbersOfTerms)