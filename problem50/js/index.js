// write a java script program to get a two numbers from the user , and then get the table of the two numbers by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaaying The Table"
document.getElementById("mainDescription").innerHTML = "Generating , Or Displaying Two Tables Of Two Different Numbers "
var fristNumber = Number(window.prompt("Please Enter The Frist Number Is = "))
var secondNumber = Number(window.prompt("Please Enter The Second Number Is = "))
function gettingTablesOfNumbers(friNum , secNum){
    console.log("Different Values Of Two Numbers Is : ")
    console.log("The Value Of The Frist Number Is = ",friNum)
    console.log("The Table Of The Frist Number Is : ")
    var num1 = 0 
    for(num1 ; num1<=friNum , num1++){
        console.log(num1 * friNum)
    }
    console.log("The Value Of The Second Number Is = ",secNum)
    
}