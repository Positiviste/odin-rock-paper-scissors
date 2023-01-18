// Scoring
let playerScore = 0;
let computerScore = 0;

// Reset button
const resetButton = document.querySelector('#resetButton');
// Rock, paper, scissors buttons
const playerButtons = document.querySelectorAll('.player-buttons > button');

// Listen for rock, paper, scissors buttons pressed
playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    })
})

// Listen for reset button pressed
resetButton.addEventListener('click', () => {
    resetGame();
});

// Make computer choose randomly rock, paper or scissors.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "rock";
    } else if (computerChoice == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return (computerChoice);
}

// Change score accordingly to result and send correct round message to be printed.
function playRound(playerSelection, computerSelection) {
    let ps = playerSelection;
    let cs = computerSelection;
    let message = "";
    if (ps == cs) {
        message = `It\'s a tie ! You both played ${ps} !`
    } else if ((ps == "rock" && cs == "paper")
        || (ps == "paper" && cs == "scissors")
        || (ps == "scissors" && cs == "rock")) {
        computerScore += 1
        ps = ps.charAt(0).toUpperCase() + ps.slice(1);
        message = `You loose this round ! ${ps} is beaten by ${cs} !`;
    } else {
        playerScore += 1
        ps = ps.charAt(0).toUpperCase() + ps.slice(1);
        message = `You win this round ! ${ps} beats ${cs} !`;
    }
    changeRoundMessage(message);
    changeResultMessage();
    checkEndGame();
}

// change round result below buttons
function changeRoundMessage(message) {
    let currentRound = document.querySelector('#currentRound');
    currentRound.textContent = message;
}

// Score message
function changeResultMessage() {
    let currentResult = document.querySelector('#currentResult');
    currentResult.textContent = "Player score : " + playerScore + " - Compter score : " + computerScore;
}

// Check if someone have 3 points.
function checkEndGame() {
    if (playerScore == 3) {
        changeEndGameMessage("playerWin");
        endGame();
    } else if (computerScore == 3) {
        changeEndGameMessage("computerWin");
        endGame();
    }
}

// Winner announcement
function changeEndGameMessage(winner) {
    let finalResult = document.querySelector('#finalResult');
    if (winner == "playerWin") {
        finalResult.textContent = "Congratulation for this little victory."
    } else if (winner == "computerWin") {
        finalResult.textContent = "I wanna be humble but ... I absolutly crushed you !"
    } else {
        finalResult.textContent = message;
    }
}

// Listen for rock, paper, scissors buttons pressed
function endGame() {
    playerButtons.forEach((button) => {
        button.disabled = true;
        button.style.color = '#ccc';
    })
    resetButton.hidden = false;
};

// reset
function resetGame() {
    playerButtons.forEach((button) => {
        button.disabled = false;
        button.style.color = '#000';
    })
    resetButton.hidden = true;
    currentRound.textContent = "";
    currentResult.textContent = "";
    finalResult.textContent = "";
    playerScore = 0;
    computerScore = 0;
}