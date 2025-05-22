// write a java script program to get array of numbers from the user , and then display the array of the numbers =>
document.getElementById("mainHeading").innerHTML = "Displaying Array Of Numbers"
document.getElementById("mainDescription").innerHTML = "Displaying Array Of Number From The User"
const arrayOfDifferentElements = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
for (var i = 0 ; i <= numberOfTerms ; i++) {
    var differentElements = Number(window.prompt("Please Enter The Number "+(i + 1)+" That Will Be Stored In The Array Of Different Elements"))
    arrayOfDifferentElements.push(differentElements)   
}
console.log("The Array Of Different Elements Is : ",arrayOfDifferentElements)