// write a java script program to get character from the user , and then check if the character is a vowel character , or a consnent character by using switch by using function method =>
document.getElementById("mainHeading").innerHTML = "Check If The Character Is A Vowel Character , Or A Consnent Character"
document.getElementById("mainDescription").innerHTML = "Getting The Character , And Then Check If The Character Is A Vowel Character , Or Consnent Character"
var character = window.prompt("Please Enter The Character Is : ")
function checkCharacterIsAVowelAConsnentCharacter(char){
    console.log("The Character Is : \"",char,"\"")
    switch(char){
        case "A" :
            console.log("It Is A Vowel Character")
            break;
        case "a" :
            console.log("It Is A Vowel Character")
            break;
        case "E" :
            console.log("It Is A Vowel Character")
            break;
        case "e" :
            console.log("It Is A Vowel Character")
            break;
        case "I" :
            console.log("It Is A Vowel Character")
            break;
        case "i" :
            console.log("It Is A Vowel Character")
            break;
        case "O" :
            console.log("It Is A Vowel Character")
            break;
        case "o" :
            console.log("It Is A Vowel Character")
            break;
        case "U" :
            console.log("It Is A Vowel Character")
            break;
        case "u" :
            console.log("It Is A Vowel Character")
            break;
        default :
        console.log("It Is A Consnent Character")
    }
}
checkCharacterIsAVowelAConsnentCharacter(character)