// write a java script program to get name of the user , and then check if the user name is uppercase , and if the user name is not uppercase you should get the upper case of the user name => 
document.getElementById("mainHeading").innerHTML = "Displaying The Name Of The User Is : "
var userName = window.prompt("Please Enter The Name Of The User Is : ")
console.log("The Name Of The User Is : "+userName)
console.log("Check If The User Name In The Uppercase Or The User Name In The Lowercase")
if((userName === userName.toUpperCase())) {
    console.log("It Is Okay , The User Name In UPPERCASE")
}
else{
    console.log("It Is Not Okay , The User Name In LOWERCASE")
    console.log("The User Name In The UPPERCASE IS : "+userName.toUpperCase())
}