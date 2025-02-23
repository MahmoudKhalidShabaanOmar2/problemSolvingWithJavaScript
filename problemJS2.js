document.getElementById("welcome").innerHTML = "Hello Everyone! , And Welcome To 2- Problem Solving With Java Script" ;
window.alert("Hello Everyone , And Welcome To Problem Solving With Java Script") ;
// write a java script program to check if this number divisible by three , and four at the same time , or not =>
var number = window.prompt("Please Enter The Number Is = ")
console.log("The Number Is = " , number)
if((number %3 == 0) && (number %4 == 0)) {
    console . log("This Number Is Divisible By Three , And Four At The Same Time , Because Your Entered Number Is = " , number)
}
else{
    console . log("This Number Is Not Divisible By Three , And Four At The Same Time , Because Your Entered Number Is = " , number) 
}