// write a java script program to get the temprature into the fahrenheit , and then converted into the centigrade , and kelvin bvy using function method =>
document.getElementById("mainHeading").innerHTML = "Displaying The Temprature Into The Centigrade , And Kelving Temprature"
let tempratueIntoFahrenheit=Number(window.prompt("Please Enter The Temprature Into The Fahrenheit Is : "))
function getTempratureIntoCentigradeKelvin(tempIntoFahrenheit){
    console.log("The Temprature Into The Fahrenheit Is : ",tempIntoFahrenheit," Fahrenheit")
    let tempratureIntoCentigrade=(tempIntoFahrenheit - 32) * 5/9 
    console.log("The Temprature Into The Centigrade Is : ",tempratureIntoCentigrade," Centigrade")
    let tempratureIntoKelvin=tempratureIntoCentigrade + 273.15 
    console.log("The Temprature Into The Kelvin Is : ",tempratureIntoKelvin," Kelvin")
}
getTempratureIntoCentigradeKelvin(tempratueIntoFahrenheit)