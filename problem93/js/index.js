// write a java script program to get array of different elements , then displaying the array of different elements , display the second element from the starting of the array of different elements , and ending element from the ending of the array of different elements by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Second Element From The Starting Of The Array Of Different Elements , And The Second Element From The Ending Of The Array Of Different Elements"
document.getElementById("mainDescription").innerHTML = "Displaying The Array Of Different Elements , And Displaying The Second Element From The Starting Of The Array Of Different Elements , And The Second Element From The Ending Of The Array Of Different Elements"
const arrayOfDifferentElements = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
for (var i = 0 ; i <= numberOfTerms ; i++) {
    var differentElements = window.prompt("Please Enter The Element That Will Be Stored In The Array Of Different Element Is : ")
    arrayOfDifferentElements.push(differentElements)
}
function getArrayOfDifferentElements(arrOfDiffElem , numOfTerms) {
    console.log("The Number Of Terms Is = ",numOfTerms," Terms")
    console.log("The Array Of Different Elements Is : ",arrOfDiffElem)
    var secondElementFromStartingOfArrayOfDifferentElements = arrOfDiffElem[1]
    console.log("The Second Element From The Starting Of The Array Of Different Elements Is : ",secondElementFromStartingOfArrayOfDifferentElements)
    var secondElementFromEndingOfArrayOfDifferentElements = arrOfDiffElem[numOfTerms - 1]
    console.log("The Second Element From The Ending Of The Array Of Different Elements Is : ",secondElementFromEndingOfArrayOfDifferentElements)
}
getArrayOfDifferentElements(arrayOfDifferentElements , numberOfTerms)