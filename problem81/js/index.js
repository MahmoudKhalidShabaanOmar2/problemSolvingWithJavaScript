// write a python program  to get string sentence from the user , and then get the length of the string sentence =>
document.getElementById("mainHeading").innerHTML = "Displaying The Length Of The Sentence"
document.getElementById("mainDescription").innerHTML = "Getting The String Sentence From The User , And Then Displaying The Length Of The String Sentence"
var stringSentence = window.prompt("Please Enter The String Sentence Is = ")
console.log("The String Sentence Is = ",stringSentence)
var lengthOfStringSentence = stringSentence.length
console.log("The Length Of The String Sentence Is = ",lengthOfStringSentence," Characters")