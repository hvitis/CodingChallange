
function getRandomColor() {
  var letters = '1234567890ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $(".page-header").css("background", getRandomColor());
}
