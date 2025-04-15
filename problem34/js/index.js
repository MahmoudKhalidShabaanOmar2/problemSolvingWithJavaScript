// write a java script program to get number from the user , and then do all compound assignment operation on the number by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Number , And Then Get All Compound Assignment Operations On The Number"
var number = Number(window.prompt("Please Enter The Number Is = "))
function getNumber(num){
    console.log("The Number Is = ",num)
    console.log("All Compound Operations On The Number Is : ")
    num += 10 
    console.log("The Result Of The Addition Compound Assignment Operation Is = ",num)
    num -= 10 
    console.log("The Result Of The Subtraction Compound Assignment Operation Is = ",num)
    num *= 10
    console.log("The Result Of The Multiplication Compound Assignment Operation Is = ",num)
    num /= 10
    console.log("The Result Of The Division Compound Assignment Operation Is = ",num)
    num %= 10 
    console.log("The Result Of The Modulus Compound Assignment Operation Is = ",num)
    num **= 10
    console.log("The Result Of The Square Compound Assignment Operation Is = ",num)
}
getNumber(number)