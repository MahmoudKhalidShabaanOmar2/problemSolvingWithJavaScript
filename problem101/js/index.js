// write a java script program to get probability of winning , prize of gamable , and at the pay of the costing of playing , and then check if the net outcome = probability of winning * prize of gamable - costing of playing , and if net outcome less than one return true , otherwise return false by using function method =>
document.getElementById("mainHeading").innerHTML = "Checking If The Net Outcome Is Grater Than One , Or Less Than One"
document.getElementById("mainDescription").innerHTML = "Getting The Probability Of Winning , Prize Of Gamable , And At The End Costing Of Playing , And At The End Get The Costing Of Playing , If The Net OutCome Of Playing Is Less Than One Return True Otherwise Return False"
var probabilityOfWinning = Number(window.prompt("Please Enter The Probability Of Winning Is = "))
var prizeOfGamable = Number(window.prompt("Please Enter The Prize Of The Gamable Is = "))
var costingOfPlaying = Number(window.prompt("Please Enter The Costing Of Playing Is = "))
function getNetOutComeOfPlaying(probOfWinning , prizeOfGame , costOfPlaying) {
    console.log("The Probability Of The Winning Is = ",probOfWinning)
    console.log("The Prize Of The Gamable Is = ",prizeOfGame)
    console.log("The Cost Of Playing Is = ",costOfPlaying)
    var netOutCome = probOfWinning * prizeOfGame - costOfPlaying 
    console.log("The Net Outcome Of The Playing Is = ",netOutCome)
    if(netOutCome >= 1) {
        console.log("The Net Outcome Is True , Because The Net Outcome Is Grater Than One")
    }
    else {
        console.log("The Net Outcome Is False , Because The Net Outcome Is Less Than One")
    }
}
getNetOutComeOfPlaying(probabilityOfWinning , prizeOfGamable , costingOfPlaying)