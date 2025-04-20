// write a java script program to get user name from the user , and then check if the user name is in lowercase , or in the uppercase =>
document.getElementById("mainHeading").innerHTML = "Displaying The User Name"
var userName = window.prompt("Please Enter The User Name Is : ")
console.log("The User Name Is : "+userName)
console.log("Check If The User Name In UPPERCASE , Or The User Name In LOWERCASE")
if(userName === userName.toLowerCase()){
    console.log("It Is Okay , The User Name In The Lowercase")
}
else{
    console.log("It Is Not Okay , The User Name In The UPPERCASE")
    console.log("The User Name In The Lowercase Is : "+userName.toLowerCase())
}