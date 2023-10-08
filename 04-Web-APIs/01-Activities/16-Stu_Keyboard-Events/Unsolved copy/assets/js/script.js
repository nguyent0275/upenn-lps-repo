
// * As a developer, I want to display the value and code of a pressed key.

// ## Acceptance Criteria

// * It's done when, if a key is pressed down, the value of the key and the key's code is displayed. `KEYDOWN Event` should also be displayed to indicate the type of event. 
// * It's done when, if the key is released, `KEYUP Event` is displayed.
var keyDownArea = document.querySelector('#key')

// TODO: Complete keydown function
// function runs on keydown
function keydownAction(event) {
  // key variable saves the keystroke as character value
  var key = event.key
  // code variable saves the keystroke as key code value
  var code = event.keyCode
  // displaying message in (html.line22) when eventListener (js.line35) calls keydownAction function
  document.querySelector("#status").textContent = "KEYDOWN Event";
  // displays the key pressed in (html.line16)
  document.querySelector("#key").textContent = key;
  // displays the key pressed as keycode in (html.line19)
  document.querySelector("#code").textContent = code;
}
// function runs on keyup (all the time as long as no keydown)
function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
  clearText()
}
// clears the text from keydown when keyup is running
function clearText() {
  document.querySelector("#key").textContent = "";
  document.querySelector("#code").textContent = "";
}
// listening for key ups or downs, then running appropriate function
document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);