var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/repos/IBM/clai/issues?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);// array
      for (var i = 0; i < data.length; i++) { // for-loop
        // create
        var userName = document.createElement('h3');
        var issueTitle = document.createElement('p');
        // attr and text
        userName.textContent = data[i].user.login;
        issueTitle.textContent = data[i].title;
        // append
        issueContainer.append(userName);
        issueContainer.append(issueTitle);
      }
    });
}
fetchButton.addEventListener('click', getApi);