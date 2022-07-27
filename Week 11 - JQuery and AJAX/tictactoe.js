let id = 0; //id of each cell
let isX = true; // x or o
let canPlay = true;

// creates grid
function createGrid() {
  let temp; //temp variable to hold html
  for (let i = 0; i < 3; i++) {
    // creates rows
    temp += ` 
        <tr>
            ${createRow()}
        </tr>
        `;
  }
  $("#grid").html(temp); //adds html to grid
}

// creates rows within grid
function createRow() {
  let row = ""; //temp variable to hold html
  for (let i = 0; i < 3; i++) {
    // creates cells within rows
    row += ` 
            <td class="cell" id=${id} value="0"> </td>
        `;
    id++;
  }

  return row; //returns html
}
createGrid(); //call the createGrid function

//adds X or O to the game board
function addValues(i) {
  //i is the id of the cell
  let x = $(`#${i.id}`); //gets the cell with the id of i.id

  let v = x.text(); //X or O

  //if the cell is empty
  if (v != "X" && v != "O") {
    x.attr("value", getValue()); //sets the value of the cell to the value of getValue()
    x.text(`${getTurn()}`); //adds the value of getTurn() to the cell

    evaluate(getBoard()); //calls the evaluate function
  }
}

// gets the board
function getBoard() {
  let board = [];
  let z = 0;
  for (let i = 0; i < 3; i++) {
    board.push([]); //creates a new row
    for (let j = 0; j < 3; j++) {
      board[i].push(parseInt($(`#${z}`).attr("value"))); //adds the value of the cell to the board
      z++; //increments z by 1
    }
  }
  return board; //returns the board
}

function evaluate(board) {
  let rowSum = board.map((r) => r.reduce((a, b) => a + b)); //gets the sum of each row
  console.log("rowSum:", rowSum); //prints the sum of each row
  let colSum = board.reduce((a, b) => a.map((x, i) => x + b[i])); //gets the sum of each column
  console.log("colSum:", colSum); //prints the sum of each column
  colSum.map((x) => checkForWin(x)); //checks columns for win conditions
  rowSum.map((x) => checkForWin(x)); //checks rows for win conditions
  diagonalSums(board).map((x) => checkForWin(x)); //checks diagonals for win conditions
}

function checkForWin(n) {
  let m = $(`#message`); //gets the message div
  if (n == 3) {
    m.text("X Wins!"); //if the sum is 3, X wins
    canPlay = false; //stops the game
  } else if (n == -3) {
    m.text("O Wins!"); //if the sum is -3, O wins
    canPlay = false; //stops the game
  } else if (isDrawn()) {
    m.text("The game was a draw!"); //if the game is drawn
    canPlay = false; //stops the game
  }
}

function isDrawn() {
  //iterates through the board
  for (let i of getBoard()) {
    //loops through each row
    for (let j of i) {
      //if the cell is empty
      if (j == 0) {
        return false; //returns false
      }
    }
  }
  return true; //returns true
}

// this method returns a value of either x or o
function getValue() {
  if (isX) {
    return 1; //returns 1 if isX is true
  }
  return -1; //returns -1 if isX is false
}

// updates html
function getTurn() {
  let temp = isX;
  //if isX is true
  if (isX) {
    temp = "X"; //if isX is true, returns X
    $(`#turn`).text(`Player: O`); //updates the turn div
  } else {
    temp = "O"; //if isX is false, returns O
    $(`#turn`).text(`Player: X`); //updates the turn div
  }
  isX = !isX; //switches isX
  return temp; //returns the value of temp
}

// adds event listeners to the cells
function diagonalSums(board) {
  let d1 = 0, //diagonal 1
    d2 = 0; //diagonal 2

  // iterates through the board
  for (let row = 0; row < board.length; row++) {
    d1 += board[row][row]; //adds the value of the cell to d1
    d2 += board[row][board.length - row - 1]; //adds the value of the cell to d2
  }
  //   console.log(d1 + " " + d2);
  return [d1, d2]; //returns the sum of d1 and d2
}

// Event Listener
document.querySelectorAll("#grid td").forEach(
  (
    e //iterates through the cells //adds an event listener to each cell
  ) =>
    e.addEventListener("click", function () {
      if (canPlay) {
        addValues(event.target); //calls the addValues function
      }
    })
);
// Event Listener
btn.addEventListener("click", function () {
  location.reload(); //reloads the page
});
