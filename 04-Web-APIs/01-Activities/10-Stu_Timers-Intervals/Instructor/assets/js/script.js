var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // console.log("Something");
    // console.log(Math.random());

    timeLeft--; // timeLeft = 4
    console.log(timeLeft);
    timerEl.textContent = timeLeft + " seconds left"; // 4 seconds left

    // want to stop and disappear after we get to 0
    // if we run out of time
    if(timeLeft <= 0){
      clearInterval(timeInterval);
      // stops the interval

      timerEl.textContent = "";

      displayMessage();
    }

  }, 1000); // 1000 milliseconds = 1 second ( repeat this function every second)
  // }, 500); // 500 milliseconds = 0.5 second ( repeat this function twice a second)
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
