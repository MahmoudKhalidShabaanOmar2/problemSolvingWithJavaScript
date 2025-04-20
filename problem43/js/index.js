// write a java script program to get five subjects from the user , and then get the total marks of all subjects by using function methods =>
document.getElementById("mainHeading").innerHTML = ("Displaying The Total Marks Of All Subjects")
var physics = Number(window.prompt("Please Enter The Total Marks Of The Physics Is = "))
var chemical = Number(window.prompt("Please Enter The Total Marks Of The Chemical Is = "))
var mathmaticas = Number(window.prompt("Please Enter The Total Marks Of The Mathmaticas Is = "))
var english = Number(window.prompt("Please Enter The Total Marks Of The English Is = "))
var programming = Number(window.prompt("Please Enter The Total Marks Of The Programming Is = "))
function getTotalMarksOfAllSubjects(phy , chem , math , eng , prog) {
    console.log("Displaying The Total Marks Of All Subjects Is : ")
    console.log("The Total Marks Of The Physics Is = ",phy," Marks")
    console.log("The Total Marks Of The Chemical Is = ",chem," Marks")
    console.log("The Total Marks Of The Mathmaticas Is = ",math," Marks")
    console.log("The Total Marks Of The English Is = ",eng," Marks")
    console.log("The Total Marks Of The Programming Is = ",prog," Marks")
    var sumOfTotalMarksOfAllSubjects = phy + chem + math + eng + prog 
    console.log("The Sum Of The Total Marks Of All Subjects Is = ",sumOfTotalMarksOfAllSubjects," Marks")
}
getTotalMarksOfAllSubjects(physics , chemical , mathmaticas , english , programming)