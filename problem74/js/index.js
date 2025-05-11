// write a java script program to get the arrow function of the value , you should know that arrow function constructed as => arrowFunction = (/*parameters*/) => parameters =>
document.getElementById("mainHeading").innerHTML = "Displaying The Arrow Function" 
document.getElementById("mainDescription").innerHTML = "Getting The Values From The User , And Then Displaying The Arrow Function For The Users"
var value = window.prompt("Please Enter The Value Is = ")
console.log("The Value Is : ",value)
const arrowFunction = (value) => value 
console.log("The Arrow Function Of The Value Is : ",arrowFunction(value))