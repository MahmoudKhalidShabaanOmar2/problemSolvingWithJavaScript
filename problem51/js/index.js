// write a java script program to get number from the user , and then get the floor of the number =>
document.getElementById("mainHeading").innerHTML = "Flooring Of Number"
document.getElementById("mainDescription").innerHTML = "Displaying Flooring Of Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Is = ",number)
var flooringOfNumber = Math.floor(number)
console.log("The Flooring Of The Number Is = ",flooringOfNumber," Because Your Entered Number Is = ",number)