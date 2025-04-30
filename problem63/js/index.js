// write a java script program to get two numbers from the user then get the arthimetic operation from the user then get arthimetic operation on the two numbers by using switch by using function method =>
document.getElementById("mainHeading").innerHTML = "Getting The Arthimetic Operation On The Two Numbers"
document.getElementById("mainDescription").innerHTML = "Getting The Two Numbers From The User , And Then Displaying The Result Of The Arthimetic Operation On The Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
var arthimeticOperation = window.prompt("Please Enter The Arthimetic Operation Is : ")
function getArthimeticOperationOnTwoNumbers(friNum , secNum , arthiOpera) {
    console.log("The Frist Number Is = ",friNum)
    console.log("The Second Number Is = ",secNum)
    console.log("The Arthimetic Operation Is : ",arthiOpera)
    switch(true){
        case (arthiOpera == "+") :
            var additionArthimeticOperation = friNum + secNum
            console.log("The Result Of The Addition Arthimetic Operation On The Two Numbers Is = ",additionArthimeticOperation)
            break;
        case (arthiOpera == "-") :
            var subtractionArthimeticOperation = friNum - secNum 
            console.log("The Result Of The Subtraction Arthimetic Operation On The Two Numbers Is = ",subtractionArthimeticOperation)
            break;
        case (arthiOpera == "*") :
            var multiplicationArthimeticOperation = friNum * secNum 
            console.log("The Result Of The Multiplication Arthimetic Operation On The Two Numbers Is = ",multiplicationArthimeticOperation)
            break;
        case (arthiOpera == "/") :
            var divisionArthimeticOperation = friNum / secNum 
            console.log("The Result Of The Division Arthimetic Operation On The Two Numbers Is = ",divisionArthimeticOperation)
            break;
        case (arthiOpera == "%") :
            var modulusArthimeticOperation = friNum % secNum 
            console.log("The Result Of The Modulus Arthimetic Operation On The Two Numbers Is = ",modulusArthimeticOperation)
            break;
        default :
            console.log("Please Enter A Valid Arthimetic Operation")
    }
}
getArthimeticOperationOnTwoNumbers(fristNumber , secondNumber , arthimeticOperation)