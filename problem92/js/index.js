// write a java script program to get array of different elements , then display the array of different elements , and at the end displaying second element from starting of the array of different elements , and second element from ending of the array of different elements =>
document.getElementById("mainHeading").innerHTML = "Displaying The Second Element From Starting Of The Array Of Different Elements , And Also Displaying The Second Number From The Ending Of The Array Of Different Elements"
document.getElementById("mainDescription").innerHTML = "Getting Array Of Different Elements , And Then Displaying The Second Element From The Starting Of The Array Of Different Elements , And Then Displaying The Second Element From The Ending Of The Array Of Different Elements"
const arrayOfDifferentElements = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
for (var i = 0 ; i <= numberOfTerms ; i++) {
    var differentElements = window.prompt("Please Enter The Element "+(i + 1)+" That Will Be Stored In The Array Of Different Elements Is : ")
    arrayOfDifferentElements.push(differentElements)
}
console.log("The Array Of Different Elements Is : ",arrayOfDifferentElements)
var secondElementFromStartingOfArrayOfDifferentElements = arrayOfDifferentElements[1] 
console.log("The Second Element From The Starting Of The Array Of Different Elements Is : ",secondElementFromStartingOfArrayOfDifferentElements)
var secondElementFromEndingOfArrayOfDifferentElements = arrayOfDifferentElements[numberOfTerms - 1]
console.log("The Second Element From The Ending Of The Array Of Different Elements Is : ",secondElementFromEndingOfArrayOfDifferentElements)