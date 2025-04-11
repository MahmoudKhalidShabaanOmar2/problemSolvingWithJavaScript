// write a java script program to get the total marks of all subjects in the college , and at the end get the average of all subjects =>
document.getElementById("mainHeading").innerHTML = "Displaying Total Marks Of All Subjects In The College" 
console.log("Displaying Total Marks Of All Subjects In The College Is : ")
var physics = Number(window.prompt("Please Enter The Total Marks Of The Physics Is = "))
console.log("The Total Marks Of The Physics Is = ",physics," Marks")
var chemical = Number(window.prompt("Please Enter The Total Marks Of The Chemical Is = "))
console.log("The Total Marks Of The Chemical Is = ",chemical," Marks")
var mathmaticas = Number(window.prompt("Please Enter The Total Marks Of The Mathmaticas Is = "))
console.log("The Total Marks Of The Mathmaticas Is = ",mathmaticas," Marks")
var programming = Number(window.prompt("Please Enter The Total Marks Of The Programming Is = "))
console.log("The Total Marks Of The Programming Is = ",programming," Marks")
var probability = Number(window.prompt("Please Enter The Total Marks Of The Probability Is = "))
console.log("The Total Marks Of The Probability Is = ",probability," Marks")
var english = Number(window.prompt("Please Enter The Total Marks Of The English Is = "))
console.log("The Total Marks Of The English Is = ",english," Marks")
var totalMarksOfAllSubjectsInCollege = physics + chemical + mathmaticas + programming + probability + english 
console.log("The Total Marks Of All Subjects In The College Is = ",totalMarksOfAllSubjectsInCollege," Marks")
var averageOfTotalMarksOfAllSubjectsInCollege = totalMarksOfAllSubjectsInCollege / 6
console.log("The Average Of The Total Marks Of All Subjects In The College Is = ",averageOfTotalMarksOfAllSubjectsInCollege," Marks")