// write a java script program to get angle from the user , and then get the sin , cos , tan of the angle =>
document.getElementById("mainHeading").innerHTML = "Get The Sin , Cos , Tan Of The Angle"
var angle = Number(window.prompt("Please Enter The Angle Is = "))
console.log("The Angle Is = ",angle," Degree")
var sinOfAngle = Math.sin(angle)
console.log("The Sin Of The Angle Is = ",sinOfAngle," Degree")
var cosOfAngle = Math.cos(angle)
console.log("The Cos Of The Angle Is = ",cosOfAngle," Degree")
var tanOfAngle = Math.tan(angle)
console.log("The Tan Of The Angle Is = ",tanOfAngle," Degree")
