var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // separating the inputs that you individually add, otherwise it will add all the todos in your list multiple times. 
  todoList.innerHTML = "";
  // displaying the amount of todos in your list as a counter.
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // for each todo that you type and enter, it will make a list element in the html and a button element for that todo and added it to the ul. 
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// fires on page load
function init() {
  // TODO: What is the purpose of the following line of code?
  // Use JSON.parse() to convert text to JavaScript object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // checking for key value pairs in the object, if there are none it will exit out of the function
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // stores the onject of todos locally and turns it in to a json string
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// adds and event listener for adding todos
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // if the todo thats being added has no value, it will not work
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // stores the todo locally and prints them
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// adds and eventlistener to the complete button
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // if the complete button is clicked, then the todo will be removed
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // the removed todo will be removed from local storage and the remaining todos will be moved up on page to take the empty space
    storeTodos();
    renderTodos();
  }
});

init();
