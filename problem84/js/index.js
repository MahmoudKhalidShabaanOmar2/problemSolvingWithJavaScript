// write a java script program to get string number from the user , and then converted to integer number by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Integer Number"
document.getElementById("mainDescription").innerHTML = "Getting The String Number From The User , And Then Getting The Integer Number"
var stringNumber = window.prompt("Please Enter The String Number Is = ")
function gettingIntegerNumber(stringNumber){
    console.log("The String Number Is = ",stringNumber)
    // integerNumber = Number(stringNumber)
    // integerNumber = +stringNumber 
    integerNumber = parseInt(stringNumber)
    console.log("The Integer Number Is = ",integerNumber)
}
gettingIntegerNumber(stringNumber)