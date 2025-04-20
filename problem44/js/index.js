// write a java script program to get five total marks of all subjects to get the sum , and average of total marks of all subjects by using function methods => 
document.getElementById("mainHeading").innerHTML = "Displaying Total Marks Of All Subjects"
var physics = Number(window.prompt("Please Enter The Total Marks Of The Physics Is = "))
var chemical = Number(window.prompt("Please Enter The Total Marks Of The Chemical Is = "))
var programming = Number(window.prompt("Please Enter The Total Marks Of The Programming Is = "))
var mathmaticas = Number(window.prompt("Please Enter The Total Marks Of The Mathmaticas Is = "))
var english = Number(window.prompt("Please Enter The Total Marks Of The English Is = "))
function getSumAverageOfTotalMarksOfAllSubjects(phys , chem , prog , math , eng) {
    console.log("Displaying Total Marks Of All Subjects Is : ")
    console.log("The Total Marks Of Physics Is = ",phys," Marks")
    console.log("The Total Marks Of The Chemical Is = ",chem," Marks")
    console.log("The Total Marks Of The Programming Is = ",prog," Marks")
    console.log("The Total Marks Of The Mathmaticas Is = ",math," Marks")
    console.log("The Total Marks Of The English Is = ",eng," Marks")
    var sumOfTotalMarksOfAllSubjects = phys + chem + prog + math + eng 
    console.log("The Sum Of The Total Marks Of All Subjects Is = ",sumOfTotalMarksOfAllSubjects," Marks")
    var averageOfTotalMarksOfAllSubjects = sumOfTotalMarksOfAllSubjects / 5
    console.log("The Average Of The Total Marks Of All Subjects Is = ",averageOfTotalMarksOfAllSubjects," Marks")
}
getSumAverageOfTotalMarksOfAllSubjects(physics , chemical , programming , mathmaticas , english)