document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementsByClassName('About')[0];
  var div = document.getElementsByClassName('aboutClicked')[0];

  var exitButton = document.getElementsByClassName('aboutExit')[0];

  button.addEventListener('click', function () {
    div.style.display = 'block';
  });

  exitButton.addEventListener('click', function () {
    div.style.display = 'none';
  });
});
