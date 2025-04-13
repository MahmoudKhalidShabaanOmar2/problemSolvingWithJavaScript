// write a java script program to get number of months from the user , and then get the numbers of days =>
document.getElementById("mainHeading").innerHTML = "Displaying Number Of Months , And Number Of Days"
var numOfMonths = Number(window.prompt("Please Enter The Number Of Months Is = "))
console.log("The Number Of Months Is = ",numOfMonths," Months")
var numOfDays = numOfMonths * 30 
console.log("The Number Of Days Is = ",numOfDays," Days")