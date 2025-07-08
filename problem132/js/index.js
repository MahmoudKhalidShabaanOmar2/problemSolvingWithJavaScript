// write a java script program to get the temprature in the fahrenheit , and then converted into the centigrade , and kelvin =>
document.getElementById("mainHeading").innerHTML="Displaying The Temprature Into The Fahrenheit , Centigrade , And Kelvin"
let tempratureIntoFahrenheit=Number(window.prompt("Please Enter The Temprature Into The Fahrenheit Is : "))
console.log("The Temprature Into The Fahrenheit Is : ",tempratureIntoFahrenheit," Fahrenheit")
let tempratureIntoCentigrade=(tempratureIntoFahrenheit - 32) * 5/9
console.log("The Temprature Into The Centigrade Is : ",tempratureIntoCentigrade," Centigrade")
let tempratureIntoKelvin=tempratureIntoCentigrade + 273.15
console.log("The Temprature Into The Kelvin Is : ",tempratureIntoKelvin," Kelvin")