// write a java script program to get two numbers from the user , and then check between the maximum number =>
document.getElementById("mainHeading").innerHTML = "get the maximum number between the two numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
console.log("The Frist Number Is = ",fristNumber)
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("The Second Number Is = ",secondNumber)
if(fristNumber > secondNumber) {
    console.log("The Frist Number Is The Maximum Number , Because The Frist Number Is = ",fristNumber)
    console.log("The Second Number Is The Minimum Number , Because The Second Number Is = ",secondNumber)
}
else{
    console.log("The Second Number Is The Maximum Number , Because The Second Number Is = ",secondNumber)
    console.log("The Frist Number Is The Minimum Number , Because The Frist Number Is = ",fristNumber)
}
