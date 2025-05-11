// write a java script program to get number of frames , and minutes , and then calculate the numbers of frames per numbers of seconds certain in FPS =>
document.getElementById("mainHeading").innerHTML = "Displaying The Numbers Of Frames Per Seconds"
document.getElementById("mainDescription").innerHTML = "Getting The Number Of Frames , And Number Of Minutes To Get The Number Of Frames Per Seconds"
var numberOfFrames = Number(window.prompt("Please Enter The Number Of Frames Is = "))
var numberOfMinutes = Number(window.prompt("Please Enter The Number Of Seconds Is = "))
console.log("The Number Of Frames Is = ",numberOfFrames," Frames")
console.log("The Number Of Minutes Is = ",numberOfMinutes," Minutes")
var numberOfFramesPerSecondsFPS = numberOfFrames * numberOfMinutes * 60 
console.log("The Number Of Frames Per Seconds Is = ",numberOfFramesPerSecondsFPS," FPS")