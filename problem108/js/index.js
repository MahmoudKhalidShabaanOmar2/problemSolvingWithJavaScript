// write a java script program to get array of elements from the user , and then display the middle element from the array of the elements =>
document.getElementById("mainHeading").innerHTML = "Displaying The Array Of Elements , And Then Display The Middle Element From The Array Of Elements"
const arrayOfDifferentElements = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
for(var i = 0 ; i < numberOfTerms ; i++) {
    var elements = window.prompt("Please Enter The Element ("+(i + 2)+") Is : ")
    arrayOfDifferentElements.push(elements)
}
console.log("The Array Of The Elements Is : ",arrayOfDifferentElements)
var middleIndexNumber = Math.floor(numberOfTerms / 2)
console.log("The Middle Index Number Is = ",middleIndexNumber)
var middleElementFromArrayOfElements = arrayOfDifferentElements[middleIndexNumber]
console.log("The Middle Element From The Array Of Elements Is : ",middleElementFromArrayOfElements)