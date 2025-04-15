// write a java script program to get number from the user , and then get the square number of the user by using fumction =>
document.getElementById("mainHeading").innerHTML = "Display The Number , And Then Displaying The Square Of The Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
function squareOfNumber(num){
    console.log("The Number Is = ",num)
    squareOfNumber = num * num 
    console.log("The Square Of The Number Is = ",squareOfNumber)
}
squareOfNumber(number)