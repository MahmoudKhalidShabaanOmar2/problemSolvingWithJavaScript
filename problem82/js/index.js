// write a java script program to get the string sentence from the user , and then get the length of the string sentence by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Length Of The String Sentence"
document.getElementById("mainDescription").innerHTML = "Getting The String Sentence , And Then Get The Length Of The String Sentence"
var stringSentence = window.prompt("Please Enter The String Sentence Is : ")
function getStringSentence(strSen) {
    console.log("The String Sentence Is : ",strSen)
    var lengthOfStringSentence = strSen.length 
    console.log("The Length Of The String Sentence Is = ",lengthOfStringSentence)
}
getStringSentence(stringSentence)