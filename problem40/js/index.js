// write a java script program to get number from the user , then get the previous number , and next number , get the sum of previous number , and number , the sum of the next number , and number ,  and at the second get the sum of the previous number , and next number in the final result =>
document.getElementById("mainHeading").innerHTML = "Displaying The Number , The Previous Number , And At The End The Next Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Is = ",number)
var previousNumber = number - 1
console.log("The Previous Number Is = ",previousNumber)
var sumOfNumPNum = number + previousNumber 
console.log("The Sum Of The Number , And The Previous Number Is = ",sumOfNumPNum)
var nextNumber = number + 1
console.log("The Next Number Is = ",nextNumber)
var sumOfNumNNum = number + nextNumber 
console.log("The Sum Of The Number , And The Next Number Is = "+sumOfNumNNum)
var sumOfPNumNNum = previousNumber + nextNumber
console.log("The Sum Of The Previous Number , And The Next Number Is = ",sumOfPNumNNum)