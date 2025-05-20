// write a java script program to solve the challenge by fixing the buggy code , given inputs true , or false , see examples below for the expected output by using function method =>
document.getElementById("mainHeading").innerHTML = "Solve The Buggy Code"
document.getElementById("mainDescription").innerHTML = "Given Inputs From The User As True Or False To Solve The Buggy Code"
var booleanValue = window.prompt("Please Enter The Boolean Value Is : ")
function solvingBuggyChallenge(boolVal) {
    console.log("The Boolean Value Is : ",boolVal)
    if(boolVal == "True" || boolVal == "true") {
        return "Sad Days"
    }
    else if(boolVal == "False" || boolVal == "false") {
        return "Good Days"
    }
    else {
        return "Please Enter A Valid Input"
    }
}
console.log(solvingBuggyChallenge(booleanValue))