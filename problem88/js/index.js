// write a java script program to get array of elements , and then display the last elements from the array of different elements =>
document.getElementById("mainHeading").innerHTML = "Displaying The Last Element From The Array Of Different Elements"
document.getElementById("mainDescription").innerHTML = "Getting The Array Of Different Elements , And Then Displaying The Last Element From The Array Of Different Elements"
const arrayOfDifferentElements = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
for (let i = 0 ; i <= numberOfTerms ; i++) {
    var differentElements = window.prompt("Please Enter The Element "+(i + 1)+" Is : ")
    arrayOfDifferentElements.push(differentElements)
}
console.log("The Array Of The Different Elements Is : ",arrayOfDifferentElements)
var lastElementFromArrayOfDifferentElements = arrayOfDifferentElements[numberOfTerms]
console.log("The Last Element From The Array Of Different Elements Is : ",lastElementFromArrayOfDifferentElements)