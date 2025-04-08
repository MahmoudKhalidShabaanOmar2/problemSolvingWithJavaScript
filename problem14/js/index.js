// write a java script program to get starting number as i variable and get the ending number , and then displaying , or generating only even numbers from starting number as i to ending number =>
document.getElementById("mainHeading").innerHTML = "Displaying , Or Generating Only Even Numbers"
var i = 0 
console.log("The Number As Starting Number Is = ",i)
var number = Number(window.prompt("Please Enter The Number As The Ending Number Is = "))
console.log("The Number As The Ending Number Is = ",number)
console.log("Generating , Or Displaying Only Even Numbers From Starting Number Is = ",i," To The Ending Number Is = ",number," In The Properly (Ascending) Order Is : ")
for (i ; i <= number ; i++){
    if(i %2 == 0) {
        console.log(i)
    }
}