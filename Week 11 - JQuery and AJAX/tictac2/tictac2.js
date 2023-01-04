const reset = document.getElementById("resetButton"); //reset button
let turn = document.getElementById("turn"); //turn indicator
const squares = document.querySelectorAll(".square"); //game board squares

//Winning Combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let xIsNext = null; //if true, X goes next, if false, O goes next.

// Randomly choose who goes first
function randomTurn() {
  turn.innerHTML = "";
  // 50% chance of either X or O going first
  if (Math.random() < 0.5) {
    console.log("X goes first");
    xIsNext = true; // X goes first

    turn.innerHTML = "X goes first"; // Display who goes first in HTML
  } else {
    console.log("O goes first");
    xIsNext = false; // O goes first

    turn.innerHTML = "O goes first"; // Display who goes first in HTML
  }
}

randomTurn();

let gameState = Array(9).fill(null); // Creates an array and fills it with 9 null elements.
console.log("gamestate test:", gameState);
// Reset button
reset.addEventListener("click", () => {
  gameState = Array(9).fill(null);
  squares.forEach((square) => {
    square.textContent = "";
  });

  randomTurn();
});

function handleClick(index) {
  if (gameState[index] || checkForWin()) return;
  //   gameState[index] = xIsNext ? "X" : "O";
  //   //convert the above to an if statement
  if (xIsNext) {
    turn.innerHTML = "X goes first"; // Display who goes first in HTML
    gameState[index] = "X";
  } else {
    turn.innerHTML = "O goes first"; // Display who goes first in HTML
    gameState[index] = "O";
  }
  squares[index].textContent = gameState[index];
  checkForWin();
  xIsNext = !xIsNext; // Switches the turn to the opposite player
}

function checkForWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i]; // Destructure's the array into 3 variables a, b, and c and assigns them to the values of the winningCombinations array at index i.

    console.log(`
      winning combo: ${[a, b, c]}
      gameState a ${a}: ${gameState[a]}
      gameState b ${b}: ${gameState[b]}
      gameState c ${c}: ${gameState[c]}

      ${
        /*
        if the cell hasn't been played yet, it will be null. 
        if it has been placed but no combo has been reach it will return false. 
        If a combo has been reached it will return true.
        
        This is used in the if statement below to check if a combo has been reached.
        */
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      }
    `);

    // Check if a winning combination has been reached
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      turn.innerHTML = `Player ${gameState[a]} wins!`; // Display who wins in HTML
      return true;
    }
    // Check if the game is a draw
    else if (!gameState.includes(null)) {
      turn.innerHTML = "It's a draw!"; // Display draw in HTML
      return true;
    }
    // else nothing and the game continues.
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => handleClick(i)); // Add an event listener to each square
}
