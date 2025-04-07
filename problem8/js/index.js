// write a java script program to get number from the user , and then check if the number is a positive number , or the number is a negative number =>
document.getElementById("mainHeading").innerHTML = "check if the number is a positive number , or a negative number"
var number = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Is = ",number)
if(number > 0){
    console.log("it is a positive number , because your entered number is = ",number)
}
else{
    console.log("it is a negative number , because your entered number is = ",number)
}