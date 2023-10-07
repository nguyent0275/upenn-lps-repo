// * As a developer, I want to create a speed-reading application that prints a single word of a message at a time.

// ## Acceptance Criteria

// * It's done when the number of seconds left on the countdown is printed on the screen.

// * It's done when, after the countdown of 5 seconds ends, the words of the message appear on the screen, one word at a time.


var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
  // splitting the message variable up by words and not letters, the (' ') is checking for spaces which is between words
var words = message.split(' ');

function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // "--" is ticking the timeLeft variable of 5 down by a second at a time
    timeLeft--;
    // displaying the timeLeft with, "seconds left in a textarea in the html's main
    timerEl.textContent = timeLeft + " seconds left.";
    // if the timer hits 0 seconds, the timer will dissapear and run the displayMessage function on line 39. 
    if (timeLeft === 0) {
      clearInterval(timeInterval)
      displayMessage()
      
    }
    //
    // YOUR CODE HERE
    //how often the setInterval function is being called, which is 1000ms or 1s (the rate the timer goes down)
  },1000);
}

// Displays the message one word at a time
function displayMessage() {
  // the wordCount starts at 0, which calls the first word in the var words (line 15)
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message, when the function reaches the end of the string it'll return undefined
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message, the wordCount will increase by 1 which will move down the string. The words will be displayed in the text area in the html's main
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
    //how often the setInterval function is being called, which is 1000ms (how often the words pop up in the function)
  }, 1000);
}

countdown();
