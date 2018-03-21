var circle = document.querySelector("circle");
function getRandomColor() {
    var letters = '1234567890ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
circle.setAttribute("fill", getRandomColor());