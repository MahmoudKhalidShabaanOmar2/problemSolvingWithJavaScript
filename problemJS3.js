document.getElementById("welcome").innerHTML = "Hello Everyone! , And Welcome To 3- Problem Solving With Java Script"
window.alert("Hello Everyone! , And Welcome To Problem Solving With Java Script")
// write a java script program to get two numbers from the user , and then get the maximum , and minimum number =>
var fristNumber = window.prompt("Please Enter The Frist Number Is = ")
var secondNumber = window.prompt("Please Enter The Second Number Is = ") 
console.log("The Frist Number Is = ",fristNumber) 
console.log("The Second Number Is = ",secondNumber)
if((fristNumber > secondNumber)){
    console.log("The Frist Number Is The Maximum Number , Because The Frist Number Is = ",fristNumber)
}
else{
    console.log("The Second Number Is The Maximum NUmber , Because The Second Number Is = ",secondNumber)
}