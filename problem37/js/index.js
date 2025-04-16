// write a java script program to get two numbers from the user , and then get the maximum number between the two numbers by using max() built in function by using function methods =>
document.getElementById("mainHeading").innerHTML = "Displaying The Maximum Number Between The Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
function getMaximumNumber(friNum , secNum){
    console.log("Different Values Of The Two Numbers Is : ")
    console.log("The Value Of The Frist Number Is = ",friNum)
    console.log("The Value Of The Second Number Is = ",secNum)
    let maximumNumber = Math.max(friNum , secNum)
    console.log("The Maximum Number Between The Two Number Is : ",maximumNumber)
}
getMaximumNumber(fristNumber , secondNumber)