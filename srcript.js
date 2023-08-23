

const board = document.getElementById("board");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset-button");

let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""]; // Represents the tic-tac-toe board

// Add click event listeners to each cell in the grid
board.addEventListener("click", (e) => {
    const cell = e.target;
    const index = parseInt(cell.dataset.index);

    // Check if the cell is empty and the game is not over
    if (boardState[index] === "" && !isGameOver(boardState)) {
        boardState[index] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.classList.add("cell-filled");

        if (isGameOver(boardState)) {
            message.innerText = `Player ${currentPlayer} wins!`;
        } else if (boardState.includes("")) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            message.innerText = `Player ${currentPlayer}'s turn`;
        } else {
            message.innerText = "It's a draw!";
        }
    }
});

// Reset the game when the reset button is clicked
resetButton.addEventListener("click", () => {
    boardState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    message.innerText = "Player X's turn";
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.innerText = "";
        cell.classList.remove("cell-filled");
    });
});

// Check if the game is over (win or draw)
function isGameOver(board) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}


// document.addEventListener("DOMContentLoaded", () => {
//     let outer = document.getElementById("outer");
//     let chance = false; // when chance is false we put O , when chance is true we put X
//     let arr = Array(9).fill(undefined);
//     outer.addEventListener("click", (e) => {
//         let cell = e.target;
//         let cellNumber = cell.getAttribute("data-cell");
//         if(cell.getAttribute("data-clicked")) {
//             return;
//         }
//         cell.setAttribute("data-clicked", "true");
//         if(chance == true) {
//             cell.textContent = "X";
//             arr[cellNumber] = "X";
//             winningCombo("X");
//         } else {
//             cell.textContent = "O"
//             arr[cellNumber] = "O";
//             winningCombo("O");
//         }
//         console.log(arr);
//         chance = !chance; // toggles chance
//     })

//     function winningCombo(char) {
//         let result = document.getElementById("result");
//         if(arr[0] == char && arr[1] == char && arr[2] == char) {
//             // the f0th row is having the char;
//             result.textContent = `${char} wins`;
//         }
//         else if(arr[3] == char && arr[4] == char && arr[5] == char) {
//             // the 1st row is having the char;
//             result.textContent = `${char} wins`;
//         }
//         else if(arr[6] == char && arr[7] == char && arr[8] == char) {
//             // the 2nd row is having the char;
//             result.textContent = `${char} wins`;
//         }
//         else if(arr[0] == char && arr[3] == char && arr[6] == char) {
//             // the 0th col is having the char;
//             result.textContent = `${char} wins`;
//         }
//         else if(arr[1] == char && arr[4] == char && arr[7] == char) {
//             // the 1st col is having the char;
//             result.textContent = `${char} wins`;
//         }
//         else if(arr[2] == char && arr[5] == char && arr[0] == char) {
//             // the 2nd col is having the char;
//             result.textContent = `${char} wins`;
//         }
//         else if(arr[0] == char && arr[4] == char && arr[8] == char) {
//             // the 1st col is having the char;
//             result.textContent = `${char} wins`;
//         }
//         else if(arr[2] == char && arr[4] == char && arr[6] == char) {
//             // the 2nd col is having the char;
//             result.textContent = `${char} wins`;
//         }
//     }
// })