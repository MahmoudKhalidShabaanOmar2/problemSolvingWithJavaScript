// the farm problem , in this challenge , the farmer is asking you to tell him how many legs can be counted among his all animals , the farmer breeds three species , chiken = 2legs , cows = 4legs , and at the end pigs = 4legs by using java script language to make this java script program =>
document.getElementById("mainHeading").innerHTML = "Displaying Total Legs Of Animals"
document.getElementById("mainDescription").innerHTML = "Getting Numbers Of Animals (Chikens , Cows , Pigs) To Get The Total Numbers Of Legs Of Animals"
var numberOfChikens = Number(window.prompt("Please Enter The Number Of Chikens Is = "))
var numberOfCows = Number(window.prompt("Please Enter The Number Of Cows Is = "))
var numberOfPigs = Number(window.prompt("Please Enter The Number Of Pigs Is = "))
console.log("The Number Of Chikens Is = ",numberOfChikens," Chikens")
var totalNumbersOfLegsOfChikens = 2 * numberOfChikens 
console.log("The Total Number Of Legs Of Chikens Is = ",totalNumbersOfLegsOfChikens," Legs")
console.log("The Number Of Cows Is = ",numberOfCows," Cows")
var totalNumbersOfLegsOfCows = 4 * numberOfCows 
console.log("The Total Number Of Legs Of Cows Is = ",totalNumbersOfLegsOfCows," Legs")
console.log("The Number Of Pigs Is = ",numberOfPigs," Pigs")
var totalNumbersOfLegsOfPigs = 4 * numberOfPigs 
console.log("The Total Number Of Legs Of Pigs Is = ",totalNumbersOfLegsOfPigs," Legs")
var totalNumbersOfLegsOfAllAnimals = totalNumbersOfLegsOfChikens + totalNumbersOfLegsOfCows + totalNumbersOfLegsOfPigs 
console.log("The Total Numbers Of Legs Of All Animals Is = ",totalNumbersOfLegsOfAllAnimals," Legs")