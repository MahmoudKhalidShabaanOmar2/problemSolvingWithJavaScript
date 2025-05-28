// write a java script program to get array of elements , and then display the middle element from the array of elements by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Middle Element From The Array Of Elements"
const arrayOfDifferentElements = []
var numberOfTerms = Number(window.prompt("Please Enter The Number Of Terms Is = "))
function gettingArrayOfDifferentElements(arrOfDiffElems , numOfTerms) {
    console.log("The Number Of Terms Is = ",numOfTerms," Terms")
    for(var i = 0 ; i < numOfTerms ; i++) {
        var elements = window.prompt("Please Enter The Number ("+(i + 1)+") Is : ")
        arrOfDiffElems.push(elements)
    }
    console.log("The Array Of Elements Is : ",arrOfDiffElems)
    var middleIndexNumber = Math.floor(numOfTerms / 2)
    console.log("The Middle Index Number Is = ",middleIndexNumber)
    var middleElementFromArrayOfDifferentElements = arrOfDiffElems[middleIndexNumber]
    console.log("The Middle Element From The Array Of The Elements Is : ",middleElementFromArrayOfDifferentElements)
}
gettingArrayOfDifferentElements(arrayOfDifferentElements , numberOfTerms)