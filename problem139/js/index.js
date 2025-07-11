// write a java script program to get the user name , and user password , and then check if the user password contains alphanumeric characters , and the length of the user password is grater than or equal to eight , and less than eight by using function method =>
document.getElementById("mainHeading").innerHTML = "Checking The User Password Is Valid , Or Not Valid."
let userName = window.prompt("Please Enter The User Name Is : ")
let userPassword = window.prompt("Please Enter The User Password Is : ")
function checkingUserPassword(uName , uPass){
    console.log("The User Name Is : ",uName)
    console.log("The User Password Is : ",uPass)
    let hasDigit = /[0-9]/.test(uPass)
    let hasLetter = /[a-zA-Z]/.test(uPass)
    let checkingLengthOfUserPassword = uPass.length >= 8 && uPass.length <= 20
    if(hasDigit && hasLetter && checkingLengthOfUserPassword){
        console.log("Hi , And Welcome ",uName," The User Password Is OKAY")
    } 
    else{
        console.log("Sorry ",uName," The User Password Is Not Okay")
    }
}
checkingUserPassword(userName , userPassword)