// write a java script program to get two arguments from the user , and then the array of the two arguement =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Two Arguements"
document.getElementById("mainDescription").innerHTML = "Getting Two Arguements From The User , And Then Displaying The Array Of The Two Arguements"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("Values Of The Two Arguments Is : ")
console.log("The Value Of The Frist Number Is = ",fristNumber)
console.log("The Value Of The Second Number Is = ",secondNumber)
function getArrayOfArguments(friNum , secNum) {
    return [friNum , secNum]
}
let arrayOfTwoArrguments = getArrayOfArguments(fristNumber , secondNumber)
console.log("The Array Of The Values Of The Two Arguements Is : ",arrayOfTwoArrguments)