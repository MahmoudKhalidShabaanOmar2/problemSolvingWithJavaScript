// write a java script program to get two numbers , and arthimetic operation from the user , and then get the arthimetic operation on the two numbers by using switch case method =>
document.getElementById("mainHeading").innerHTML = "Getting Arthimetic Operations On Two Numbers"
document.getElementById("mainDescription").innerHTML = "Getting Two Numbers From The User , And Then Displaying The Arthimetic Operation On The Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("The Frist Number Is = ",fristNumber)
console.log("The Second Number Is = ",secondNumber)
var arthimeticOperation = window.prompt("Please Enter The Arthimetic Operation Is : ")
console.log("The Arthimetic Operation Is : "+arthimeticOperation)
switch(true){
    case (arthimeticOperation == "+") :
        var additionArthimeticOperation = fristNumber + secondNumber
        console.log("The Addition Arthimetic Operation On The Two Numbers Is = ",additionArthimeticOperation)
        break;
    case (arthimeticOperation == "-") :
        var subtractionArthimeticOperation = fristNumber - secondNumber 
        console.log("The Subtraction Arthimetic Operation On The Two Numbers Is = ",subtractionArthimeticOperation)
        break;
    case (arthimeticOperation == "*") :
        var multiplicationArthimeticOperation = fristNumber * secondNumber
        console.log("The Multiplication Arthimetic Operation On The Two Numbers Is = ",multiplicationArthimeticOperation)
        break;
    case (arthimeticOperation == "/") :
        var divisionArthimeticOperation = fristNumber / secondNumber
        console.log("The Division Arthimetic Operation On The Two Numbers Is = ",divisionArthimeticOperation)
        break;
    case (arthimeticOperation == "%") :
        var modulusArthimeticOperation = fristNumber % secondNumber 
        console.log("The Modulus Arthimetic Operation On The Two Numbers Is = ",modulusArthimeticOperation)
        break;
    default :
    console.log("Please Enter A Valid Arthimetic Operation")
}
