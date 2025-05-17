// write a java script program to get sentence from the user , and then check if the string sentence is empty or not empty =>
document.getElementById("mainHeading").innerHTML = "Checking If The String Sentence Is Empty Or Not Empty"
document.getElementById("mainDescription").innerHTML = "Getting String Sentence From The User , And Then Checking If The String Sentence Is Empty Or Not Empty"
// var stringSentence = window.prompt("Please Enter The String Sentence Is : ")
// console.log("The String Sentence Is : ",stringSentence)
// console.log("Checking If The String Sentence Is Empty Or Not Empty")
// let isEmpty = (stringSentence) => stringSentence === ""
// if(isEmpty(stringSentence)) {
//     console.log("It Is OKAY , Because It Is Empty String Sentence")
// }
// else{
//     console.log("It Is Not OKAY , Because It Is Not Empty String Sentence")
// }

var stringSentence = window.prompt("Please Enter The String Sentence Is : ")
console.log("The String Sentence Is : ",stringSentence)
console.log("Checking If The String Sentence Is Empty Or Not Empty")
let isEmpty = stringSentence.length === 0
if(isEmpty){
    console.log("It Is OKAY , Because It Is Empty String Sentence")
}
else{
    console.log("It Is Not Okay , Because It Is Not Empty String Sentence")
}