// write a java script to get character from the user , and then check if the character is only one character , or more than one character =>
document.getElementById("mainHeading").innerHTML = "Displaying The Character , And Then Check If The Character Is Only One Character , Or More Than One Character"
var char = window.prompt("Please Enter The Character Is : ")
console.log("The Character Is : ",char)
console.log("Check If The Length Of The Character Is Only One Character , Or The Length Of The Character Is More Than One Character")
if(char.length === 1) {
    console.log("It Is Okay , Because It Is Only One Character")
    console.log("The Length Of The Character Is = ",char.length," Characters")
}
else{
    console.log("It Is Not Okay , Because It Is More Than One Character")
    console.log("The Length Of The Character Is = ",char.length," Characters")
}