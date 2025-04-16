// write a java script program to get three numbers from the user , and then display the maximum number between three numbers by using function methods =>
document.getElementById("mainHeading").innerHTML = "Displaying The Maximum Number Between All Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
var thirdNumber = Number(window.prompt("Please Enter The Third Number Is = "))
function getMaximumNumber(friNum , secNum , thiNum){
    console.log("Different Values Of All Numbers Is : ")
    console.log("The Value Of The Frist Number Is = ",friNum)
    console.log("The Value Of The Second Number Is = ",secNum)
    console.log("The Value Of The Third Number Is = ",thiNum)
    if((friNum > secNum) && (friNum > thiNum)){
        console.log("The Maximum Number Is The Frist Number , Because The Frist Number Is = ",friNum)
    }
    else if((secNum > friNum) && (secNum > thiNum)){
        console.log("The Second Number Is The Maximum Number , Because The Second Number Is = ",secNum)
    }
    else{
        console.log("The Third Number Is The Maximum Number , Because The Third Number Is = ",thiNum)
    }
}
getMaximumNumber(fristNumber , secondNumber , thirdNumber)