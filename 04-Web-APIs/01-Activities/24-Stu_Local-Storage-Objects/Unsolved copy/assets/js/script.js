// * It's done when I click the Save button and the form's current values are stored in a object.

// * It's done when the object is saved as a string using `localStorage`.
var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissio
var userInput = {
  firstName: firstNameInput.value,
  lastName: lastNameInput.value,
  email: emailInput.value,
  password: passwordInput.value
};

  // TODO: Set new submission to local storage 
localStorage.setItem("userInput", JSON.stringify(userInput));
});
