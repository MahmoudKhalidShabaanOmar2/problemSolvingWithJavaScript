// write a java script program program to get two numbers from the user , and then do all arthimetic operations on the two numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying Two Numbers , And Then Get All Arthimetic Operations On Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
function getAllArthimeticOperationsOnNumbers(friNum , secNum){
    console.log("All Values Of The Two Numbers Is : ")
    console.log("The Value Of The Frist Number Is = ",friNum)
    console.log("The Value Of The Second Number Is = ",secNum)
    let sumOfNumbers = friNum + secNum 
    console.log("The Result Of The Addition Arthimetic Operarion Of The Two Numbers Is = ",sumOfNumbers)
    let subOfNumbers = friNum - secNum 
    console.log("The Result Of The Subtraction Arthimetic Operation Of The Two Numbers Is = ",subOfNumbers)
    let mulOfNumbers = friNum * secNum 
    console.log("The Result Of The Multiplication Arthimetic Operation Of The Two Numbers Is = ",mulOfNumbers)
    let divOfNumbers = friNum / secNum 
    console.log("The Result Of The Division Arthimetic Operstion Of The Two Numbers Is = ",divOfNumbers)
    let modOfNumbers = friNum % secNum 
    console.log("The Result Of The Modulus Arthimetic Operation Of The Two Numbers Is = ",modOfNumbers)
}
getAllArthimeticOperationsOnNumbers(fristNumber , secondNumber)