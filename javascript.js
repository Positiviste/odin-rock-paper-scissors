// Scoring
let playerScore = 0;
let computerScore = 0;

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

// Listen for button pressed
const playerButtons = document.querySelectorAll('.player-buttons > button');
playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    })
})

// Play a round.
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

        message = `You loose this round ! ${ps} is beaten by ${cs} !`;
    } else {
        playerScore += 1
        message = `You win this round ! ${ps} beats ${cs} !`;
    }
    changeRoundMessage(message);
    changeResultMessage();
}

// change round result below buttons
function changeRoundMessage (message) {
    console.log(message);
    let currentRound = document.querySelector('#currentRound');
    currentRound.textContent=message;
}

// Check if someone have 3 points.
function checkEndGame() {
    if (playerScore == 3 || computerScore == 3) {
    changeEndGameMessage();
    }
}

function changeResultMessage () {
    let currentResult = document.querySelector('#currentResult');
    currentResult.textContent= "Player score : " + playerScore + " - Compter score : " +computerScore;
}

// Give final result.
function getFinalResult() {
    playerScore > computerScore ?
        console.log("Congratulation for this little victory.") :
        console.log("I wanna be humble but ... I absolutly crushed you !");
}


// Launch the game !

// game();