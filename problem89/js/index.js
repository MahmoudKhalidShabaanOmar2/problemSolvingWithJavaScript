// write a java script program to get array of different elements from the user , then display the array of different elements , and at the end display the last element from the array of different elements by using function method =>
const arrayOfDifferentElements = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function getArrayOfDifferentElements(arrOfDiffEleme , numOfTerms) {
    console.log("The Number Of Terms Is = ",numberOfTerms," Terms")
    for(var i = 0 ; i <= numOfTerms ; i++){
        var differentElements = window.prompt("Please Enter The Element "+(i + 1)+" Is : ")
        arrOfDiffEleme.push(differentElements)
    }
    console.log("The Array Of Different Elements Is : ",arrOfDiffEleme)
    var lastElementFromArrayOfDifferentElements = arrOfDiffEleme[numOfTerms]
    console.log("The Last Element From The Array Of Different Elements Is : ",lastElementFromArrayOfDifferentElements)
}
getArrayOfDifferentElements(arrayOfDifferentElements , numberOfTerms)