// WRITE YOUR CODE HERE

// * It's done when the total number of elements in the array is logged to the console.  

// * It's done when the message "Welcome to the class STUDENT_NAME" is logged using each element in the array. 

// * It's done when the first element in the array is replaced with the name of a new student.

// * It's done when, after an `if` statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged.

var studentNames = ["Toan", "Scott", "Bradley", "Courtney", "Hannah", "Alexander", "Johnathan"]

console.log(studentNames)
console.log(studentNames.length)

console.log("Welcome to the class " + studentNames[0])
console.log("Welcome to the class " + studentNames[1])
console.log("Welcome to the class " + studentNames[2])
console.log("Welcome to the class " + studentNames[3])
console.log("Welcome to the class " + studentNames[4])
console.log("Welcome to the class " + studentNames[5])
console.log("Welcome to the class " + studentNames[6])


studentNames.splice(0, 1, "Anthony")
console.log(studentNames)

if (studentNames[0] === "Anthony"){
    console.log(studentNames[0] + " is in the class")
} else {
    console.log("Toan is still in the class")
}

for(var i = 0; i < 7; i++){
    console.log("Welcome to the class " + studentNames[i])
}