// write a java script program , you are counting for basketball game given the amount of two pointers scored , and three pointer scored => 
document.getElementById("mainHeading").innerHTML = "Getting Total Points Scored In Basketball Game"
document.getElementById("mainDescription").innerHTML = "Getting Points Scored By Two Pointer Scored , And Three Pointer Scored To Get The Total Points Scored By The Two Pointers"
var twoPointerScored = Number(window.prompt("Please Enter The Two Pointer Scored Is = "))
var threePointerScored = Number(window.prompt("Please Enter The Three Pointer Scored Is = "))
console.log("The Total Points Of The Two Pointer Scored Is = ",twoPointerScored," Points")
console.log("The Total Points Of The Three Pointer Scored Is = ",threePointerScored," Points")
var totalPointsScored = twoPointerScored * 2 + threePointerScored * 3
console.log("The Total Points Scored By The Two Pointers , And Three Pointers Is = ",totalPointsScored," Points")