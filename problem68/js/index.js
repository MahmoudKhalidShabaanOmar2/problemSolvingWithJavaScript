// write a java script program to get number from the user , and then get the increment of the number =>
document.getElementById("mainHeading").innerHTML = "Getting The Increment Of The Number"
document.getElementById("mainDescription").innerHTML = "Getting The Number From The User , And Then Displaying The Incrementing Of The Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Is = ",number)
var incrementedNumber = number + 1
console.log("The Incremented Number Is = ",incrementedNumber)