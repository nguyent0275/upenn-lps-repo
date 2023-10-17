// Work with a partner to implement the following user story:

// * As a user, I want to be greeted with a quote by an author when I open the page.

// ## Acceptance Criteria

// * It's done when the page dynamically displays a quote by an author and the author's name on load.

// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
var rootEl = $("#root");
// Hint: Visit the documentation https://api.jquery.com/

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var authorName = $("<p>");
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
authorName.text("~ Carol Dweck");
// TODO: Add the class `plain` to the author element
authorName.attr("plain");
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var authorQuote = $("<h1>");
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
authorQuote.text(
  "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
);
// TODO: Apply the class `fancy` to the quote element
authorQuote.attr("fancy");
// TODO: Append the author element to the quote element
authorQuote.append(authorName);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootEl.append(authorQuote);
