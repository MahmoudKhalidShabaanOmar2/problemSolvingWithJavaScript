// write a java script program to get two numbers from the user , and then check the maximum numbers by using switch bu using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Maximum Number"
document.getElementById("mainDescription").innerHTML = "Getting The Two Numbers From The User , And Then Displaying The Maximum Number Between The Two Numbers"
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
function gettingMaximumNumber(friNum , secNum){
    console.log("Different Values Of The Two Numbers Is : ")
    console.log("The Frist Number Is = ",friNum)
    console.log("The Second Number Is = ",secNum)
    switch(true){
        case (friNum > secNum) :
            console.log("The Frist Number Is The Maximum Number , Because Your Entered Frist Number Is = ",friNum)
            break;
        case (secNum > friNum) :
            console.log("The Second Number Is The Maximum Number , Because Your Entered Second Number Is = ",secNum)
            break;
        case (friNum == secNum) :
            console.log("The Frist Number Is Equal To The Second Number , Because Your Entered Frist Number Is = ",friNum," , And Your Entered Second Number Is = ",secNum)
            break;
        default :
            console.log("Please Enter The Valid Two Numbers")
    }
}
gettingMaximumNumber(fristNumber , secondNumber)