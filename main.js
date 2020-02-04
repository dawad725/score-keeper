var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("#reset");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var numInput = document.querySelector("input")
var winningScoreDisplay = document.querySelector("p span")

var resetButton = document.querySelector("#reset")
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function () {
    //If gameOver is false we will allow the user to increment the score 
    if (!gameOver) {
        p1Score++;
        //Check if player's score is equal to the defined value in winningScore variable 
        if (p1Score === winningScore) {
            // If the players score equals the winningScore then we 
            // Change the score to green to indicate we have a winning score
            p1Display.classList.add("winner")
            // set gameOver varable to true so the user can't increment the score further
            gameOver = true;
        }
        // display the score for the user to see 
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function () {
    //If gameOver is false we will allow the user to increment the score 
    if (!gameOver) {
        p2Score++
        //Check if player's score is equal to the defined value in winningScore variable 
        if (p2Score === winningScore) {
            // If the players score equals the winningScore then we 
            // Change the score to green to indicate we have a winning score
            p2Display.classList.add("winner")
            // set gameOver varable to true so the user can't increment the score further
            gameOver = true
        }
        // display the score for the user to see 
        p2Display.textContent = p2Score
    }

})

resetButton.addEventListener("click", function () {
    reset()
})

// This function takes the number that is changed in the 
// input and updates the number in the text above it for the user to see
// Also uses the reset function to clear all the scores 
numInput.addEventListener("change", function () {
    winningScoreDisplay.textContent = numInput.value
    winningScore = Number(numInput.value)
    reset()
})

// This function resets the scores for both 
// players and changes the text color back to black
// Also changes gameOver variable back to false so the game can run again
function reset() {
    p1Score = 0
    p2Score = 0
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    p1Display.classList.remove("winner")
    p2Display.classList.remove("winner")
    gameOver = false
}