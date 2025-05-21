// write a java script program to get array of different elements from the user , then display the array of different elements , and at the end display the frist element , and last element from the array of different elements by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Frist Element , And Last Element From The Array Of Different Element"
document.getElementById("mainDescription").innerHTML = "Getting The Array Of Different Elements , And Then Displaying The Frist Element , And Last Element From The Array Of Different Elements"
const arrayOfDifferentElements = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfDifferentElements(arrOfDiffElem , numOfTerms) {
    console.log("The Number Of Terms Is = ",numOfTerms," Terms")
    console.log("The Array Of Different Elements Is : ",arrOfDiffElem)
    for (var i = 0 ; i <= numOfTerms ; i++) {
        var differentElements = window.prompt("Please Enter The Element "+(i + 1)+" Is : ")
        arrOfDiffElem.push(differentElements)
    }
    console.log("The Array Of Different Elements Is : ",arrOfDiffElem)
    let fristElementFromArrayOfDifferentElements = arrOfDiffElem[0]
    console.log("The Frist Element From The Array Of Different Elements Is : \"",fristElementFromArrayOfDifferentElements,"\"")
    let lastElementFromArrayOfDifferentElements = arrOfDiffElem[numberOfTerms]
    console.log("The Last Element From The Array Of Different Elements Is : \"",lastElementFromArrayOfDifferentElements,"\"")
}
getArrayOfDifferentElements(arrayOfDifferentElements , numberOfTerms)