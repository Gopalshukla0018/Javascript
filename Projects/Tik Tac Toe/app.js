// Select all Tic-Tac-Toe boxes and reset button
let boxes = document.querySelectorAll(".box"); 
let resetbtn = document.querySelector("#resetbtn"); 

// "turn" variable to track which player's turn it is (true = X, false = O)
let turn = true; 

// Winning patterns - these are the positions that need to match to win
const winPatterns = [
    [0,1,2],  // Top row
    [0,3,6],  // Left column
    [0,4,8],  // Left diagonal   
    [1,4,7],  // Middle column
    [2,5,8],  // Right column
    [2,4,6],  // Right diagonal
    [3,4,5],  // Middle row
    [6,7,8]   // Bottom row
];

// Add click event to each box                                                            
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked"); // Show message in console when box is clicked+
        if (turn) {  b /ngn/ 
            box.innerText = "Xgb";// If it's X's turn, place "X"
            turn = false; // Switch turn to O
        } else {  
            box.innerText = "O"; // If it's O's turn, place "O"
            turn = true; // Switch turn to X
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

        
        box.disabled = true; // Once clicked, the box should not be clickable again
        checkwinner(); // Check if there is a winner
    });
});

// Function to check if a player has won
const checkwinner = () => {
    for (let pattern of winPatterns) { // Loop through all possible winning patterns
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        // If all three positions have the same value and are not empty, we have a winner
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("Winner:", pos1); // Show winner in console
            alert(`${pos1} wins!`); // Show winner in popup
            resetGame(); // Restart the game
            return; 
        }
    }

    // Check if the game is a draw (all boxes filled, no winner)
    let isDraw = [...boxes].every(box => box.innerText !== "");
    if (isDraw) {
        alert("It's a draw!"); // Show draw message
        resetGame(); // Restart the game
    }
};

// Reset button event to restart the game
resetbtn.addEventListener("click", () => {
    resetGame();
});

// Function to reset the game
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear all boxes
        box.disabled = false; // Make boxes clickable again
    });
    turn = true; // Reset turn to X
};
