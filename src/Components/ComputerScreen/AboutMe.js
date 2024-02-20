document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementsByClassName('Portfolio')[0];
  var div = document.getElementsByClassName('portfolioClicked')[0];

  var exitButton = document.getElementsByClassName('Exit')[0];

  button.addEventListener('click', function () {
    div.style.display = 'block';
  });

  exitButton.addEventListener('click', function () {
    div.style.display = 'none';
  });
});
