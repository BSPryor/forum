var button = document.getElementById('submit');

button.addEventListener('click', function () {
  var userName = document.getElementById('name').value;
  var userMessage = document.getElementById('message').value;

  var postsDiv = document.querySelector('.posts');

  var newPostDiv = document.createElement('div');

  var newPostP = document.createElement('p');
  var newPostNode = document.createTextNode(userMessage);
  newPostP.appendChild(newPostNode);

  var newPostNameP = document.createElement('p');
  var newPostNameNode = document.createTextNode('Posted by' + userName);
  newPostNameP.appendChild(newPostNameNode);

  var newPostHR = document.createElement('hr');

  newPostDiv.append(newPostP);
  newPostDiv.append(newPostNameP);
  newPostDiv.append(newPostHR);
  
  postsDiv.append(newPostDiv);
});