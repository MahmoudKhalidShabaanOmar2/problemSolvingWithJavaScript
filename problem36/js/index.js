// write a java script program to get to numbers from the user , and then display the maximum number by using function =>
document.getElementById("mainHeading").innerHTML = "Displaying The Maximum Number Between Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
function getMaximumNumber(friNum , secNum){
    console.log("The Values Of The Two Numbers Is : ")
    console.log("The Value Of The Frist Number Is = ",friNum)
    console.log("The Value Of The Second Number Is = ",secNum)
    console.log("Please Check The Maximum Number Between The Two Numbers Is : ")
    if(friNum > secNum){
        console.log("The Frist Number Is The Maximum Number , Because The Frist Number Is = ",friNum)
    }
    else{
        console.log("The Second Number Is The Maximum Number , Because The Second Number Is = ",secNum)
    }
}
getMaximumNumber(fristNumber , secondNumber)