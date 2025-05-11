// write a java script program to get two numbers from the user , and then check if the two numbers are equal together or not =>
document.getElementById("mainHeading").innerHTML = "Checking If The Two Numbers Equal Together Or Not"
document.getElementById("mainDescription").innerHTML = "Getting Two Numbers From The User , And Then Check If The Two Numbers Are Equal Together , Or Not"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("Values Of The Two Numbers Is : ")
console.log("The Frist Number Is = ",fristNumber)
console.log("The Second Number Is = ",secondNumber)
if(fristNumber == secondNumber) {
    console.log("TRUE")
}
else{
    console.log("FALSE")
}