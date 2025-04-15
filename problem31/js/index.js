// write a java script program to get two numbers from the user , and then get the sum of two numbers by using function => 
document.getElementById("mainHeading").innerHTML = "Displaying The Sum Of The Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
function sumOfNumbers(fristNum , secondNum){
    console.log("The Frist Number Is = "+fristNum)
    console.log("The Second Number Is = "+secondNum)
    sumOfNumbers = fristNum + secondNum 
    console.log("The Sum Of The Two Numbers Is = "+sumOfNumbers)
}
sumOfNumbers(fristNumber , secondNumber)