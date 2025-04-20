// write a java script program to get the total marks of the five subjects , and then get the sum of the total marks of all subjects , average of the sum of the total marks of all subjects , and at the end get the percentage of the sum of the total marks of all subjects by using function => 
document.getElementById("mainHeading").innerHTML = "Displaying Total Marks Of All Subjects"
var physics = Number(window.prompt("Please Enter The Total Marks Of The Physics Is = "))
var chemical = Number(window.prompt("Please Enter The Total Marks Of The Chemical Is = "))
var mathmaticas = Number(window.prompt("Please Enter The Total Marks Of The Mathmaticas Is = "))
var programming = Number(window.prompt("Please Enter The Total Marks Of The Programming Is = "))
var english = Number(window.prompt("Please Enter The Total Marks Of The English Is = "))
var totalMarksOfAllSubjects = Number(window.prompt("Please Enter The Total Marks Of All Subjects Is = "))
function getSumAveragePercentageOfTotalMarksOfAllSubjects(phys , chem , math , prog , eng , tMarks) {
    console.log("Displaying The Total Marks Of All Subjects Is : ")
    console.log("The Total Marks Of The Physics Is = ",phys," Marks")
    console.log("The Total Marks Of The Chemical Is = ",chem," Marks")
    console.log("The Total Marks Of The Mathmaticas Is = ",math," Marks")
    console.log("The Total Marks Of The Programming Is = ",prog," Marks")
    console.log("The Total Marks Of The English Is = ",eng," Marks")
    console.log("The Total Marks Of All Subjects Is = ",tMarks," Marks")
    let sumOfTotalMarksOfAllSubjects = phys + chem + math + prog + eng 
    console.log("The Sum Of The Total Marks Of All Subjects Is = "+sumOfTotalMarksOfAllSubjects," Marks")
    let averageOfSumOfTotalMarksOfAllSubjects = sumOfTotalMarksOfAllSubjects / 5
    console.log("The Average Of The Total Marks Of All Subjects Is = ",averageOfSumOfTotalMarksOfAllSubjects," Marks")
    let percentageOfSumOfTotalMarksOfAllSubjects = (sumOfTotalMarksOfAllSubjects / tMarks) * 100 
    console.log("The Percentage Of The Sum Of The Total Marks Of All Subjects Is = ",percentageOfSumOfTotalMarksOfAllSubjects+"%")
}
getSumAveragePercentageOfTotalMarksOfAllSubjects(physics , chemical , mathmaticas , programming , english , totalMarksOfAllSubjects)