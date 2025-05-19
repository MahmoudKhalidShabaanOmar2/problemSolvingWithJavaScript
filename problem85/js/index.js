// write a java script program to get frist name , and last name from the user , and then concatenation between the frist name , and the last name =>
document.getElementById("mainHeading").innerHTML = "Displaying The Full Name Of The User"
document.getElementById("mainDescription").innerHTML = "Getting The Frist Name , And Last Name From The User , And Then Displaying The Full Name Of The User"
var fristName = window.prompt("Please Enter The Frist Name Is : ")
console.log("The Frist Name Is : ",fristName)
var lastName = window.prompt("Please Enter The Last Name Is : ")
console.log("The Last Name Is : ",lastName)
var fullName = fristName + " , " + lastName 
console.log("The Full Name Of The User Is : ",fullName)