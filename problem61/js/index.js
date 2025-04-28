// write a java script program to get three numbers from the user , and then check the maximum number between the three numbers by using switch =>
document.getElementById("mainHeading").innerHTML = "Displaying The Maximum Number"
document.getElementById("mainDescription").innerHTML = "Getting The Three Numbers , And Then Displaying The Maximum Number"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
var thirdNumber = Number(window.prompt("Please Enter The Third Number Is = "))
console.log("Different Values Of The Three Numbers Is : ")
console.log("The Frist Number Is = ",fristNumber)
console.log("The Second Number Is = ",secondNumber)
console.log("The Third Number Is = ",thirdNumber)
console.log("Checking The Maximum Number Between The Three Numbers Is : ")
switch(true) {
    case (fristNumber > secondNumber) || (fristNumber > thirdNumber) :
        console.log("The Frist Number Is The Maximum Number , Because The Frist Number Is = ",fristNumber)
        break;
    case (secondNumber > fristNumber) || (secondNumber > thirdNumber) :
        console.log("The Second Number Is The Maximum Number , Because The Second Number Is = ",secondNumber)
        break;
    case (thirdNumber > fristNumber) || (thirdNumber > secondNumber) :
        console.log("The Third Number Is The Maximum Number , Because The Third Number Is = ",thirdNumber)
        break;
    default :
        console.log("The Three Numbers Are Equal Together")
}