// write a java script program to get number from the user , and then check if the number is an even number , or an odd number =>
document.getElementById("mainHeading").innerHTML = "check if the number is an even number , or an odd number"
var number = Number(window.prompt("Please Enter The Number Is = "))
console.log("The Number Is = ",number)
// if(number %2 == 0) {
//     console.log("It Is Even Number , Because Your Entered Number Is = ",number," , And The Modulus Of The Number By Two Is = ",number % 2)
// }
// else{
//     console.log("It Is Odd Number , Because Your Entered Number Is = ",number," , And The Modulus Of The Number By Two Is = ",number % 2)
// }
if(number %2 != 0){
    console.log("It Is Odd Number , Because Your Entered Number Is = ",number," , And The Modulus Of The Number By Two Is = ",number % 2)
}
else{
    console.log("It Is Even Number , Because Your Entered Number Is = ",number," , And The Modulus Of The Number By Two Is = ",number % 2)
}