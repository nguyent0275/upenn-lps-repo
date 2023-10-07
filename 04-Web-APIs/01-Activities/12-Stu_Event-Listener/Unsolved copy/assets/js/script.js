var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
  countEl.textContent = count+= 1;
});

// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function() {
  countEl.textContent = count-= 1;
});

// substitute code below if you don't want counter to reach negatives

// if (countEl.textContent == 0) {
//   alert("Sorry you can't go lower than this")
// }
// else {
//   countEl.textContent = count-= 1;
// }
// });
