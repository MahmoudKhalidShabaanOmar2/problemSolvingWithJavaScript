// write a java script program to get string sentence from the user , and then checking if the string sentence is empty or not empty by using function method =>
document.getElementById("mainHeading").innerHTML = "Checking If The String Sentence Is Empty Or Not Empty"
document.getElementById("mainDescription").innerHTML = "Getting The String Sentence From The User , And Then Checking If The String Sentence Is Empty Or Not Empty"
// var stringSentence = window.prompt("Please Enter The String Sentence Is : ")
// function checkingIfStringSentenceIsEmpty(strSen){
//     console.log("The String Sentence Is : ",strSen)
//     console.log("Checking If The String Sentence Is Empty Or Not Empty")
//     let isEmpty = (strSen) => strSen === ""
//     if(isEmpty(strSen)) {
//         console.log("It Is Okay , Because It Is Empty String Sentence")
//     }
//     else{
//         console.log("It Is Not OKAY , Because It Is Not Empty String Sentence")
//     }
// }
// checkingIfStringSentenceIsEmpty(stringSentence)

var stringSentence = window.prompt("Please Enter The String Sentence Is : ")
function checkingIfStringSentenceIsEmpty(strSen) {
    console.log("The String Sentence Is : ",strSen)
    console.log("Checking If The String Sentence Is Empty Or Not Empty")
    let isEmpty = strSen.length === 0 
    if(isEmpty) {
        console.log("It Is OKAY , Because It Is An Empty String Sentence")
    }
    else{
        console.log("It Is Not OKAY , Because It Is Not Empty String Sentence")
    }
}
checkingIfStringSentenceIsEmpty(stringSentence)