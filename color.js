var n = 6;
var colors;
var picked;

var squares = document.querySelectorAll(".square");
var colorDisp = document.querySelector("span");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#new");
var mode = document.querySelectorAll(".mode");

init();

function init() {
  // add events for mode buttons
  setupModes();

  //add click events on squares
  setupSquares();

  reset();
}

newGame.addEventListener("click", function () {
  reset();
});

//reset the colors
function reset() {
  h1.style.backgroundColor = "steelblue";
  msg.textContent = "";
  newGame.textContent = "NEW GAME";

  colors = rand_col(n);
  picked = rand_pick(colors);
  colorDisp.textContent = picked;

  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    if (colors[i]) {
      squares[i].style.display = "block";

      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

//set up events for mode buttons
function setupModes() {
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");

      this.classList.add("selected");

      this.textContent === "EASY" ? (n = 3) : (n = 6);

      reset();
    });
  }
}

//set up squares click events
function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      //check if color of each square is the picked one
      var clickedColor = this.style.backgroundColor;

      if (clickedColor != picked) {
        this.style.backgroundColor = "#232323";
        msg.textContent = "TRY AGAIN";
      } else {
        msg.textContent = "CORRECT";
        change_col(clickedColor);
        h1.style.backgroundColor = clickedColor;
        newGame.textContent = "PLAY AGAIN?";
      }
    });
  }
}

//change colors if you win
function change_col(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

//randomize the picked color
function rand_pick(col_List) {
  return colors[parseInt(Math.random() * colors.length)];
}

//randomize the colors generated for the array
function rand_col(val) {
  var arr = [];

  for (var i = 0; i < val; i++) {
    arr.push(randomize());
  }

  return arr;
}

function randomize() {
  //now we have to pick a nr for each channel
  var red = parseInt(Math.random() * 256);
  var green = parseInt(Math.random() * 256);
  var blue = parseInt(Math.random() * 256);

  var str = "rgb(" + red + ", " + green + ", " + blue + ")";

  return str;
}
