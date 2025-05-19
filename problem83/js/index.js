// write a java script program to get string number from the user , and then converted two integer number =>
document.getElementById("mainHeading").innerHTML = "Displaying The Integer Number"
document.getElementById("mainHeading").innerHTML = "Getting The String Number From The User , And Then Converted To Integer Number"
let stringNumber = window.prompt("Please Enter The String Number Is = ")
console.log("The String Number Is = ",stringNumber)
// let integerNumber = Number(stringNumber)
// let integerNumber = parseInt(stringNumber)
let integerNumber = +stringNumber
console.log("The Integer Number Is = ",integerNumber)