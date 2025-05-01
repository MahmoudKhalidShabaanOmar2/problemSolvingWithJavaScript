// write a java script program to get number from the user , and then get all assignment compound operations on the number by using switch case by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying All Compound Assignment Operations On The Number"
document.getElementById("mainDescription").innerHTML = "Getting Number From The User , And Then Getting Compound Assignment Operation On The Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Is = ",number)
var assignmentOperation = window.prompt("Please Enter The Compound Assignment Operation Is : ")
console.log("The Compound Assignment Operation Is : ",assignmentOperation)
switch(true){
    case (assignmentOperation == "+") :
        number += 10
        console.log("The Result Of The Addition Compound Assignment Operation Is = ",number)
        break;
    case (assignmentOperation == "-") :
        number -= 10
        console.log("The Result Of The Subtraction Compound Assignment Operation Is = ",number)
        break;
    case (assignmentOperation == "*") :
        number *= 10
        console.log("The Result Of The Multiplication Compound Assignment Operation Is = ",number)
        break;
    case (assignmentOperation == "/") :
        number /= 10
        console.log("The Result Of The Division Compound Assignment Operation Is = ",number)
        break;
    case (assignmentOperation == "%") :
        number %= 10
        console.log("The Result Of The Modulus Compound Assignment Operation Is = ",number)
        break;
    case (assignmentOperation == "**") :
        number **= 10
        console.log("The Result Of The Square Compound Assignment Operation Is = ",number)
        break;
    default :
        console.log("Please Enter A Valid Compound Assignment Operation")

}