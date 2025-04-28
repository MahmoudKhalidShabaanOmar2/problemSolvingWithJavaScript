// write a java script program to get two numbers from the user , and then check the maximum number by using switch case =>
document.getElementById("mainHeading").innerHTML = "Displaying The Maximum Number"
document.getElementById("mainDescription").innerHTML = "Getting The Two Numbers , And Then Displaying The Maximum Number"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
console.log("Different Values Of The Two Numbers Is : ")
console.log("The Frist Number Is = ",fristNumber)
console.log("The Second Number Is = ",secondNumber)
console.log("Check The Maximum Number Between The Two Numbers Is : ")
switch(true) {
    case (fristNumber > secondNumber) :
        console.log("The Frist Number Is The Maximum Number , Because Your Entered Frist Number Is = ",fristNumber)
        break;
    case (secondNumber > fristNumber) :
        console.log("The Second Number Is The Maximum Number , Because Your Entered Second Number Is = ",secondNumber)
        break;
    case (fristNumber == secondNumber) :
        console.log("The Frist Number Is Equal To The Second Number , Because Your Entered Frist Number Is = ",fristNumber," , And Your Entered Second Number Is = ",secondNumber)
        break;
    default :
    console.log("Please Enter A Valid Two Numbers")
}