// write a java script program to get prize , probability of win , and at the end pay , if net_outcome = probability of win * prize - pay > one return false , otherwise return true =>
document.getElementById("mainHeading").innerHTML = "Checking The Outcome Of Playing"
document.getElementById("mainDescription").innerHTML = "Getting The Probability Of Wining , Prize Of Gamable , And Pay Of Gamable , And Then Check If The Outcoming Of Gamable Is Grater Than One"
var prizeOfGamable = Number(window.prompt("Please Enter The Prize Of Gamable Is = "))
var probabilityOfWinning = Number(window.prompt("Please Enter The Probability Of Winning Is = "))
var costOfPlaying = Number(window.prompt("Please Enter The Cost Of Playing Is = "))
console.log("The Prize Of Gamable Is = ",prizeOfGamable)
console.log("The Probability Of The Winning Is = ",probabilityOfWinning)
console.log("The Cost Of Playing Is = ",costOfPlaying)
var netOutcome = prizeOfGamable * probabilityOfWinning - costOfPlaying 
console.log("The Outcome Of Playing Is = ",netOutcome)
if(netOutcome > 0) {
    console.log("The Net Outcome Is True , Because The Net Outcome Is Grater Than One")
}
else{
    console.log("The Net Outcome False , Because The Net Outcome Is Less Than One")
}