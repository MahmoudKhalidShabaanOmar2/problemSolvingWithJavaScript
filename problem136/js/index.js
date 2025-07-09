// write a java script program to get the temprature into the kelvin , and then converted to fahrenheit , and centigrade temprature =>
document.getElementById("mainHeading").innerHTML= "Displaying The Temprature Into The Fahrenheit , And Centigrade"
let tempratureIntoKelvin = Number(window.prompt("Please Enter The Temprature Into The Kelvin Is : "))
console.log("The Temprature Into The Kelvin Is : ",tempratureIntoKelvin," Kelvin")
let tempratureIntoCentigrade = tempratureIntoKelvin + 273.15
console.log("The Temprature Into The Centigrade Is = ",tempratureIntoCentigrade," Centigrade")
let tempratureIntoFahrenheit = (tempratureIntoCentigrade* 9/5) + 32
console.log("The Temprature Into The Fahrenheit Is = ",tempratureIntoFahrenheit," Fahrenheit")