// write a java script program to get number from the user , and then get the cube of the number by using function =>
document.getElementById("mainHeading").innerHTML = "Displaying The Number , And Then Displaying The Cube Of The Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
function cubeOfNumber(num){
    console.log("The Number Is = ",num)
    let cubeOfNumber = num * num * num 
    console.log("The Cube Of The Number Is = ",cubeOfNumber)
}
cubeOfNumber(number)