// write a java script program to get a number from the user , and then get all compound assignment operations on the number by using switch case by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Compound Assignment Operation On The Number"
document.getElementById("mainDescription").innerHTML = "Getting The Number , And Then Displaying The Compound Assignment Operation On The Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
var assignmentOperation = window.prompt("Please Enter The Compound Assignment Operation Is : ")
function gettingCompoundAssignmentOperationOnNumber(num , assignOpera) {
    console.log("The Number Is = ",num) 
    console.log("The Assignment Compound Assignment Operation Is : ",assignOpera)
    switch(true){
        case (assignOpera == "+") :
            num += 10
            console.log("The Result Of The Addition Compound Assignment Operation On The Number Is = ",num)
            break;
        case (assignOpera == "-") :
            num -= 10
            console.log("The Result Of The Subtraction Compound Assignment Operation On The Number Is = ",num)
            break;
        case (assignOpera == "*") :
            num *= 10
            console.log("The Result Of The Multiplication Compound Assignment Operation On The Number Is = ",num)
            break;
        case (assignOpera == "/") :
            num /= 10
            console.log("The Result Of The Division Compound Assignment Operation On The Number Is = ",num)
            break;
        case (assignOpera == "%") :
            num %= 10
            console.log("The Result Of The Modulus COmpound Assignment Operation On The Number Is = ",num)
            break;
        case (assignOpera == "**") :
            num **= 10
            console.log("The Result Of The Square Compound Assignment Operation On The Number Is = ",num)
            break;
        default :
            console.log("Please Enter A Valid Compound Assignment Operation")
    }
}
gettingCompoundAssignmentOperationOnNumber(number , assignmentOperation)