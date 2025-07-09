// write a java script program to get the temprature into the centigrade , and then converted into the fahrenheit , and kelvin temprature by using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Temprature Into The Farenheit , And Kelvin Temprature."
let tempratureIntoCentigrade = Number(window.prompt("Please Enter The Temprature Into The Centigrade Is = "))
function getTempratureIntoCentigradeKelvin(tempIntoCenti){
    console.log("The Temprature Into The Centigrade Is = ",tempIntoCenti," Centigrade")
    let tempratureIntoFarhenheit = (tempIntoCenti * 9/5) + 32
    console.log("The Temprature Into The Fahrenheit Is = ",tempratureIntoFarhenheit," Farhenheit")
    let tempratureIntoKelvin = tempratureIntoFarhenheit + 273.15
    console.log("The Temprature Into The Fahrenheit Is = ",tempratureIntoKelvin," Kelvin")
}
getTempratureIntoCentigradeKelvin(tempratureIntoCentigrade)