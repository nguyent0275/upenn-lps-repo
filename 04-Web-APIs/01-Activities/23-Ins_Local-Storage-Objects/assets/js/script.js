var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var gradeReport = document.querySelector(".message")

saveButton.addEventListener("click", function(event) {
  // stops the data inputs from being cleared 
event.preventDefault();
// storing the variables and their input values into the studentGrade object. 
var studentGrade = {
  student: student.value,
  grade: grade.value,
  comment: comment.value.trim()
};
// saving the studentGrade oject into local storage and changing object into a string for local storage
localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// calling the function on line 22
renderMessage();
});

function renderMessage() {
  // lastGrade is storing a parse of the locally stored studentGrade
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  // if the last grade is not equal to null (if the last grade has a value)
  if (lastGrade !== null) {
    // display message of "value of student" + "recieved a/an" + "value of grade"
    // displayed in the h3 on (html.line40)
    gradeReport.textContent = lastGrade.student + " received a/an " + lastGrade.grade
  }
}
