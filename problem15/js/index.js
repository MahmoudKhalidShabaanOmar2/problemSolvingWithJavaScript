// write a java script program to get the starting number as i variable , and get the ending number from the user , and at the end displaying , or generating odd numbers only in the ascending (Properly) order =>
document.getElementById("mainHeading").innerHTML = "Displaying , And Generating Only ODD Numbers"
var i = 0 
console.log("The Number As The Starting Number Is = ",i)
var number = Number(window.prompt("Please Enter The Number As Ending Number Is = "))
console.log("The Number As The Ending Number Is = ",number)
console.log("Generating , Or Displaying Only ODD Numbers , From The Starting Number Is = ",i," To The Ending Number Is = ",number," In The Properly (Ascending) Order Is : ")
for (i ; i <= number ; i++){
    if(i %2 != 0){
        console.log(i)
    }
}