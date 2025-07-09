// write a java script program to get the temprature into the kelvin , and then converted to the fahrenheit , and centigrade temprature by using function method =>
document.getElementById("mainHeading").innerHTML="Displaying The Temprature Into The Fahrenheit , And Centigrade"
let tempratureIntoKelvin = Number(window.prompt("Please enter The Temprature Into The Kelvin Is : "))
function getTempratureIntoFahrenheitCentigrade(tempIntoKelvin){
    console.log("The Temprature Into The Kelvin Is = ",tempIntoKelvin," Kelvin")
    let tempratureIntoCentigrade = tempIntoKelvin + 273.15
    console.log("The Temprature Into The Centigrade Is = ",tempratureIntoCentigrade," Centigrade")
    let tempratureIntoFahrenheit = (tempratureIntoCentigrade*9/5) + 32
    console.log("The Temprature Into The Fahrenheit Is = ",tempratureIntoFahrenheit," Fahrenheit")
}
getTempratureIntoFahrenheitCentigrade(tempratureIntoKelvin)