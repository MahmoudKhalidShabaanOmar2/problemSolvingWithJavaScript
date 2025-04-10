// write a java script program to get two numbers from the user , and then get the minimum number between the two number by using min() function =>
document.getElementById("mainHeading").innerHTML = "Get The Minimum NUmber Between The Two Numbers"
fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
console.log("The Frist Number Is = ",fristNumber)
secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("The Second Number Is = ",secondNumber)
var minimumNumber = Math.min(fristNumber , secondNumber)
console.log("The Minimum Number Between The Two Numbers Is = ",minimumNumber)