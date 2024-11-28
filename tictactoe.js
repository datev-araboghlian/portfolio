const cells = document.querySelectorAll(".cell");
const message = document.getElementById("game-message");
const resetButton = document.getElementById("reset-button");

let currentPlayer = "X";
let board = Array(9).fill(null);
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWinner() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes(null) ? null : "Draw";
}

function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        gameActive = false;
        message.textContent = winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        message.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => (cell.textContent = ""));
    currentPlayer = "X";
    gameActive = true;
    message.textContent = `Player ${currentPlayer}'s turn`;
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);
