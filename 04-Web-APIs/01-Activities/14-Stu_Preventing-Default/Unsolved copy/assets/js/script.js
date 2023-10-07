var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  // .preventDefault is stopping the event from taking the user-inputted data. The total and tip amount should now be stored and calculated locally. 
  event.preventDefault();
  // converting tip input to percentage
  var tipPercentage = tipEl.value * .01;
  // logging the value of the user input for total
  var total = totalEl.value;
  // total multiplied by tip percentage
  var tipAmount = calculateTip(total, tipPercentage);
  // total + tipAmount
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}

submitEl.addEventListener("click", addTip);
