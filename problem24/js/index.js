// write a python program to the total marks of all subjects in the college => 
document.getElementById("mainHeading").innerHTML = "Displaying The Total Marks Of All Subjects"
console.log("The Total Marks Of The All Subjects In The College Is : ")
var physics = Number(window.prompt("Please Enter The Total Marks Of The Physics Is = "))
console.log("The Total Marks Of The Physics Is = ",physics," marks")
var chemical = Number(window.prompt("Please Enter The Total Marks Of The Chemical Is = "))
console.log("The Total Marks Of The Chemical Is = ",chemical," marks")
var mathmaticas = Number(window.prompt("Please Enter The Total Marks Of The Mathmaticas Is = "))
console.log("The Total Marks Of The Mathmaticas Is = ",mathmaticas," marks")
var programming = Number(window.prompt("Please Enter The Total Marks Of The Programming Is = "))
console.log("The Total Marks Of The Programming Is = ",programming," marks")
var probability = Number(window.prompt("Please Enter The Total Marks Of The Probability Is = "))
console.log("The Total Marks Of The Probability Is = ",probability," marks")
var english = Number(window.prompt("Please Enter The Total Marks Of The English Is = "))
console.log("The Total Marks Of The English Is = ",english," marks")
var totalMarksOfAllSubjects = physics + chemical + mathmaticas + programming + probability + english 
console.log("The Total Marks Of The All Subjects Is = ",totalMarksOfAllSubjects," marks")