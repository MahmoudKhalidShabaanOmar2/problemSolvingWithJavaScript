// write a java script program to get starting number as i variable , and then get the ending number , and at the end generating , or displaying all numbers from the starting number to the ending number =>
document.getElementById("mainHeading").innerHTML = "Displaying , Or Generating All Numbers"
var i = 1 
console.log("The Number As Starting Number Is = ",i)
var number = Number(window.prompt("Please Enter The Number As The Ending Number Is = "))
console.log("The Number As The Ending Number Is = ",number)
console.log("Generating , Or Displaying All Numbers From Starting Number Is = ",i," To The Ending Number Is = ",number," In The Properly (Ascending) Order")
for (i ; i <= number ; i++){
    console.log(i)
}