var button = document.getElementsByClassName('Portfolio')[0];
var div = document.getElementsByClassName('portfolioClicked')[0];

button.addEventListener('click', function () {
  if (div.style.display === 'none' || div.style.display === '') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});
