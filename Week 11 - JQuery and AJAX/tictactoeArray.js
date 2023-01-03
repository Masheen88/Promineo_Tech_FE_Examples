let playarea = document.getElementById("playarea");
let cell = document.getElementsByClassName("cell");
let currentPlayer = document.getElementById("currentPlayer");

let player = "x";
let stat = {
  x: 0,
  o: 0,
  d: 0,
};
let winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

//create the cells for the playarea
for (var i = 1; i <= 9; i++) {
  playarea.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

//add event listeners to the cells
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", cellClick, false);
}

function cellClick() {
  var data = []; //array for the player's cells

  // check whether the spot is taken
  if (!this.innerHTML) {
    this.innerHTML = player; //add the player's symbol to the cell
  } else {
    alert("Choose a different cell");
    return;
  }

  // iterate through each cell; when we encounter the player's position, we add that data to the array Data
  for (var i in cell) {
    if (cell[i].innerHTML == player) {
      data.push(parseInt(cell[i].getAttribute("pos"))); //add the cell's position to the array
    }
  }

  if (checkWinner(data)) {
    stat[player] += 1; //add 1 to the player's score
    restart(player + " is the winner!"); //restart the game
  } else {
    var draw = true;
    for (var i in cell) {
      if (cell[i].innerHTML == "") draw = false;
    }
    if (draw) {
      stat.d += 1;
      restart("It's a draw!");
    }
  }
  //after each iteration change the player and display the data array
  player = player == "x" ? "o" : "x";
  currentPlayer.innerHTML = player.toUpperCase();
}

//check whether the player's array has one of the winning combos
function checkWinner(data) {
  for (var i in winCombos) {
    var win = true;
    for (var j in winCombos[i]) {
      var id = winCombos[i][j];
      var ind = data.indexOf(id);

      if (ind == -1) {
        win = false;
      }
    }

    if (win) return true;
  }
  return false;
}

//clearing the area after the game is over
function restart(text) {
  alert(text);
  for (var i = 0; i < cell.length; i++) {
    cell[i].innerHTML = "";
  }
  updateStat();
}

function updateStat() {
  document.getElementById("sX").innerHTML = stat.x;
  document.getElementById("sO").innerHTML = stat.o;
  document.getElementById("sD").innerHTML = stat.d;
}
