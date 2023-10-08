var container = document.querySelector(".container");


container.addEventListener("click", function(event) {
  var element = event.target;
// if the target click is in the <div> element, runs function
  if (element.matches("div")){
    // stores the data-state into a variable (used to change state from hidden to visible)
    var state = element.getAttribute("data-state");
    // stores the data-number into a variable (gets called later to display number)
    var number = element.getAttribute("data-number");
// if the data-state is hidden, it changes the data-state to visible and logs the corresponding data-number to the <div>
    if (state === "hidden") {
      element.dataset.state = "visible"
      element.textContent = number
      // when data-state changes back to hidden, the text content will be erased
    } else {
      element.dataset.state = "hidden"
      element.textContent = " "
    }
  }

  // TODO: Complete function
});
