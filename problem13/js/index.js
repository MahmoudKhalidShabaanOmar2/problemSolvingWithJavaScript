// write a java script program to get starting number as i variable , and then get the ending number , and at the end displaying , or generating all the table of all numbers =>
document.getElementById("mainHeading").innerHTML = "Displaying , Or Generating The Table Of The All Numbers"
var i = 0 
console.log("The Number As The Starting Number Is = ",i)
var number = Number(window.prompt("Please Enter The Number As The Ending Number Is = "))
console.log("The Number As The Ending Number Is = ",number)
console.log("Generating , Or Displaying The Table Of All Numbers From Starting Number Is = ",i," To The Ending Number Is = ",number," In The Properly (Ascending) Order Is : ")
for (i ; i <= number ; i++) {
    console.log(i , " * " , number , " = " , i * number)
}