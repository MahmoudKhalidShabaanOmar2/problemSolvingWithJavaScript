// write a java script program to get values of two arguements from the user , and then display the array of the two arguements by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of The Two Arguements"
document.getElementById("mainDescription").innerHTML = "Displaying The Two Arguement From The User , And Then Displaying The Array Of The Two Arguements"
function getArrayOfTwoArguements(fNum , sNum) {
    return [fNum , sNum]
}
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
function getArrayOfTwoPairs(friNum , secNum) {
    console.log("The Values Of The Two Arguements Is : ")
    console.log("The Value Of The Frist Number Is = ",friNum)
    console.log("The Value Of The Second Number Is = ",secNum)
    let arrayOfTwoArguements = getArrayOfTwoArguements(friNum , secNum)
    console.log("The Array Of The Two Values Of Two Arguements Is : ",arrayOfTwoArguements)
}
getArrayOfTwoPairs(fristNumber , secondNumber)