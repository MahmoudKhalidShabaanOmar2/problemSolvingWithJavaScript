// write a java script program to array of different elements , then display array of different elements , and at the end displaying the frist element , and last element from the array of different elements =>
document.getElementById("mainHeading").innerHTML = "Displaying The Frist Element , And Last Element From The Array Of Different Elements"
document.getElementById("mainDescription").innerHTML = "Getting Array Of Different Elements , And Then Displaying The Frist Element , And Last Element From The Array Of Different Elements"
const arrayOfDifferentElements = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
for (var i = 0 ; i <= numberOfTerms ; i++) {
    var differentElements = window.prompt("Please Enter The Element "+(i + 1)+" That Will Be Stored In The Array Of Different Elements Is : ")
    arrayOfDifferentElements.push(differentElements)
}
console.log("The Array Of Different Elements Is : ",arrayOfDifferentElements)
fristElementFromArrayOfDifferentElements = arrayOfDifferentElements[0]
console.log("The Frist Element From The Array Of Different Elements Is : \"",fristElementFromArrayOfDifferentElements,"\"")
lastElementFromArrayOfDifferentElements = arrayOfDifferentElements[numberOfTerms]
console.log("The Last Element From The Array Of Different Elements Is : \"",lastElementFromArrayOfDifferentElements,"\"")