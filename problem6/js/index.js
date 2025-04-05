// write a java script program to get number from the user , and then check if this number is divisible by three , and four at the same time =>
document.getElementById("mainHeading").innerHTML = "check if the number is divisible by three , and four in the same time"
var number = Number(window.prompt("please enter the number is = "))
console.log("the number is = ",number)
if((number %3 == 0) && (number %4 == 0)){
    console.log("It Is Okay , It Is Divisble By Three , And Four At The Same Time , Because The Modulus Of The Number By Four Is = ",number % 4 , " , And The Modulus Of The Number By Three Is = ",number % 3)
}
else{
    console.log("It Is Not Okay , It Is Not Divisible By Three , And Four At The Same Time , Because The Modulus Of The Number By Four Is = ",number % 4 , " , And The Modulus Of The Number By Three Is = ",number % 3)
}