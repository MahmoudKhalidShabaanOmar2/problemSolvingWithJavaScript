// write a java script program to get three numbers from the user , and then get the maximum number , and the minimum number between the three numbers =>
document.getElementById.innerHTML = "Get The Maximum Number , And Minimum Number Between The Three Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
console.log("The Frist Number Is = ",fristNumber)
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("The Second Number Is = ",secondNumber)
var thirdNumber = Number(window.prompt("Please Enter The Third Number Is = "))
console.log("The Third Number Is = ",thirdNumber)
if((fristNumber > secondNumber) && (fristNumber > thirdNumber)) {
    console.log("The Frist Number Is The Maximum Number Because The Frist Number Is = ",fristNumber,"\n")
    console.log("The Minimum Number Is = ",Math.min(secondNumber , thirdNumber))
}
else if((secondNumber > fristNumber) && (secondNumber > thirdNumber)){
    console.log("The Second Number Is The Maximum Number , Because The Second Number Is = ",secondNumber,"\n")
    console.log("The Minimum Number Is = ",Math.min(fristNumber , thirdNumber))
}
else{
    console.log("The Third Number Is The Maximum Number , Because The Third Number Is = ",thirdNumber,"\n")
    console.log("The Minimum Number Is = ",Math.min(fristNumber , secondNumber))
}