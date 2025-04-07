// write a java script program to get character from the user , and then check if the character is a vowel character , or consnent character =>
document.getElementById("mainHeading").innerHTML = "check if the character is a vowel character , or consnent character"
char = window.prompt("Please Enter The Character Is : ")
console.log("The Character Is : ",char)
// if(((char == "A") || (char == "a"))){
//     console.log("It Is A Vowel Character")
// }
// else if(((char == "E") || (char == "e"))){
//     console.log("It Is A Vowel Character")
// }
// else if(((char == "I") || (char == "i"))){
//     console.log("It Is A Vowel Character")
// }
// else if(((char == "O") || (char == "o"))){
//     console.log("It Is A Vowel Character")
// }
// else if(((char == "U") || (char == "u"))){
//     console.log("It Is A Vowel Character")
// }
// else{
//     console.log("It Is Consnent Character")
// }

if(((char == "a") || (char == "A")) || ((char == "e") || (char == "E")) || ((char == "I") || (char == "i")) || ((char == "O") || (char == "o")) || ((char == "U") || (char == "u"))){
    console.log("It Is A Vowel Character")
}
else{
    console.log("It Is A Consnent Character")
}