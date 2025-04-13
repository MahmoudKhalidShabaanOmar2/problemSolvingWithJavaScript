// write a java script program to get total marks of all subjects in the college , then get the sum of total marks of all subjects in the college , get the average of total marks of all subjects in the college , and at the end get the percentage of the sum of total marks of all subjects in the college =>
document.getElementById("mainHeading").innerHTML = "Displaying Total Marks Of All Subjects In The College"
physics = Number(window.prompt("Please Enter The Total Marks Of The Physics Is = "))
console.log("The Total Marks Of The Physics Is = ",physics," Marks")
mathmaticas = Number(window.prompt("Please Enter The Total Marks Of The Mathmaticas Is = "))
console.log("The Total Marks Of The Mathmaticas Is = ",mathmaticas," Marks")
programming = Number(window.prompt("Please Enter The Total Marks Of The Programming Is = "))
console.log("The Total Marks Of The Programming Is = ",programming," Marks")
english = Number(window.prompt("Please Enter The Total Marks Of The English Is = "))
console.log("The Total Marks Of The English Is = ",english," Marks")
probability = Number(window.prompt("Please Enter The Total Marks Of The Probability Is = "))
console.log("The Total Marks Of The Probability Is = ",probability," Marks")
chemical = Number(window.prompt("Please Enter The Total Marks Of The Chemical Is = "))
console.log("The Total Marks Of The Chemical Is = ",chemical," Marks")
total_marks = 410 
total_marks_of_all_subjects = physics + mathmaticas + programming + english + probability + chemical 
console.log("The Sum Of The Total Marks Of All Subjects Is = ",total_marks_of_all_subjects," marks")
average_of_total_marks_of_all_subjects = total_marks_of_all_subjects / 6 
console.log("The Average Of The Total Marks Of All Subjects Is = ",average_of_total_marks_of_all_subjects+" marks")
percentage_of_total_marks_of_all_subjects = (total_marks_of_all_subjects / total_marks) * 100
console.log("The Percentage Of The Total Marks Of All Subjects Is = ",percentage_of_total_marks_of_all_subjects,"%")