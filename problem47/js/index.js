// write a java script program to get character from the user , and then check if the length of the character is only one characcter , or the length of the character is more than one character by using function method => 
document.getElementById("mainHeading").innerHTML = "Displaying The Character , Check If The Character Is Only One Character , Or The Character Is More Than One Characters"
var character = window.prompt("Please Enter The Character Is : ")
console.log("Check If The Character Is Only One Character , Or The Character Is More Than One Characters")
function checkCharacter(char){
    console.log("The Character Is : \"",char,"\"")
    if((!char) || (char.length == 1)){
        console.log("It Is OKAY , The Length Of The Character Is Only One Character")
        console.log("The Length Of The Character Is = ",char.length," Character")
    }
    else{
        console.log("It Is Not Okay , The Length Of The Character Is More Than One Characters")
        console.log("The Length Of The Character Is = ",char.length," Characters")
    }
}
checkCharacter(character)