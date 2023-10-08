var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");
// This calls the function on line 15 on page load. On the first load, there is no user input stored locally, so the function doesn't run. When there is locally stored data, this function will run. 
renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  var lastEmail = localStorage.getItem("lastEmail")
  var lastPassword = localStorage.getItem("lastPassword")
// logs the email and password from local storage to the html
  userEmailSpan.textContent = lastEmail
  userPasswordSpan.textContent = lastPassword
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
// this function is checking if the user is actually inputing data
  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user
  // saves the user's inputted data fromn above and stores it into local storage. On second loadup, the function renderLastRegistered will have stored info to run. 
  localStorage.setItem("lastEmail", email);
  localStorage.setItem("lastPassword", password)
  }
});
