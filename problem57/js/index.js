// write a java script program to get character from the user , and then check if the character is a vowel , or a consnent character By Using Switch=>
document.getElementById("mainHeading").innerHTML = "Checking If It Is A Vowel Character , Or Consnent Character"
document.getElementById("mainDescription").innerHTML = "Displaying The Character , And Then Check If The Character Is A Vowel Character , Or A Consnent Character"
var char = window.prompt("Please Enter The Character Is : ")
console.log("The Character Is : \"",char,"\"")
switch(char){
    case "A" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break;
    case "a" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break;
    case "E" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break;
    case "e" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break;
    case "I" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break ;
    case "i" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break ;
    case "O" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break;
    case "o" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break;
    case "U" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break ;
    case "u" :
        console.log("It Is A Vowel Character , Because Your Entered Character Is : \"",char,"\"")
        break;
    default :
        console.log("It Is A Consnent Character , Because Your Entered Character Is : \"",char,"\"")

}