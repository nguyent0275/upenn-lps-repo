
// * As a developer, I want to display the value and code of a pressed key.

// ## Acceptance Criteria

// * It's done when, if a key is pressed down, the value of the key and the key's code is displayed. `KEYDOWN Event` should also be displayed to indicate the type of event. 

// * It's done when, if the key is released, `KEYUP Event` is displayed.

function keydownAction(event) {
  // TODO: Complete keydown function
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

