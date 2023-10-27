var usersContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and an anchor element
        var userName = document.createElement('h3');
        // $("<h3>")
        var userUrl = document.createElement('a');
        // $("<a>");

        //Setting the text of the h3 element and anchor element.
        userName.textContent = data[i].login;
        // userName.text(data[i].login)
        userUrl.textContent = data[i].html_url;
        userUrl.setAttribute("href", data[i].html_url)
        // userUrl.attr({href: data[i].html_url});


        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        usersContainer.append(userName);
        usersContainer.append(userUrl);
      }
    });
}
fetchButton.addEventListener('click', getApi);
