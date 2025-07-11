// write a java script program to get the user password , and then check if the user password contain only alphanumeric characters , and the length of the user password is grater than eight , and less than twenty =>
document.getElementById("mainHeading").innerHTML = "Checking If The User Password Is Valid , Or Not Valid..."
let userName = window.prompt("Please Enter The User Name Is : ")
console.log("The User Name Is : ",userName)
let userPassword = window.prompt("Please Enter The User Password Is : ")
console.log("The User Password Is : ",userPassword)
console.log("Checking If The User Password Is Valid , Or Not Valid.")
let hasDigit = /[0-9]/.test(userPassword)
let hasLetter = /[a-zA-Z]/
let lengthOfUserPassword = userPassword.length >= 8 && userPassword.length <= 20
if(hasDigit && hasLetter && lengthOfUserPassword){
    console.log("Hi , And Welcome ",userName," The User Password Is Okay")
}
else{
    console.log("Sorry ",userName," The User Password Is Not Okay")
}