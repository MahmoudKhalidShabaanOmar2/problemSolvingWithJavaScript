// write a python program to get only one character from the user , and then check if it is an alphabetic character , numeric character , or symbols , special characters =>\
document.getElementById("mainHeading").innerHTML = "Displaying The Character"
document.getElementById("mainDescription").innerHTML = "Check If The Character Is A Alphabetic Character , Numeric Character , Or Symbol , Special Character"
var char = window.prompt("Please Enter The Character Is : ")
console.log("The Character Is : ",char)
if((!char) || (char.length !== 1)){
    console.log("Please Enter Only One Character , Because Your Entered Character Is : \"",char,"\"")
}
else if((!isNaN(char))){
    console.log("It Is A Numeric Character , Because Your Entered Character Is : \"",char,"\"")
}
// else if(/[a-zA-Z]/.test(char)){
//     console.log("It Is An Alphabetic Character , Because Your Entered Character Is : \"",char,"\"")
// }
else if((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")){
        console.log("It Is An Alphabetic Character , Because Your Entered Character Is : \"",char,"\"")
}
else{
    console.log("It Is A Symbol , Or Special Character , Because Your Entered Character Is : \"",char,"\"")
}