// write a java script program to get only one character from the user , and then check if the character is an alphabetic character , a numeric character , or symbol , special character by using function method =>
document.getElementById("mainHeading").innerHTML = "Displayin The Character"
document.getElementById("mainDescription").innerHTML = "Check If The Character Is An Alphabetic Character , A Numeric Character , Or Symbol , Special Character"
var character = window.prompt("Please Enter The Character Is : ")
function getCharacter(char){
    console.log("The Character Is : \"",char,"\"")
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
        console.log("It Is A Symbol , Or Special Character")
    }
}
getCharacter(character)