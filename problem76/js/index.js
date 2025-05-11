// write a vichle needs ten times of fuel than the distance that it travles then calculate the amount of fuel that needs by using the given distance by using java script language to create this java script program =>
document.getElementById("mainHeading").innerHTML = "Displaying The Amount Of Fuel That You Need To Travel"
document.getElementById("mainDescription").innerHTML = "Getting The Distance That You Travel Ti Calculate The Total Amount Of Fuel To Travel In This Distance"
var travelDistance = Number(window.prompt("Please Enter The Total Distance That You Travel Is = "))
console.log("The Total Distance That You Travel Is = ",travelDistance," Kilo Meters")
var totalAmountOfFuel = 10 * travelDistance 
console.log("The Total Amount Of Fuels That You Need In Travels Is = ",totalAmountOfFuel," liters")