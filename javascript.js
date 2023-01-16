console.log("Hello World !");

// Make computer choose randomly rock, paper or scissors.

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "Rock";
    } else if (computerChoice == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return (computerChoice);
}

// Ask Player's choice. Default is Rock.

function getPlayerChoice() {
    playerChoice = prompt("Enter Rock, Paper or Scissors", "Rock");
    return playerChoice;
}

// Play a round.
// Input = Player & Computer inputs.
// Change score accordingly to result then send the result as a message.

function playRound(playerSelection, computerSelection) {
    let ps = (playerSelection.toLowerCase());
    let cs = (computerSelection.toLowerCase());
    let message = "";
    if (ps == cs) {
        message = `It\'s a tie ! You both played ${ps} !`
    } else if ((ps == "rock" && cs == "paper")
        || (ps == "paper" && cs == "scissors")
        || (ps == "scissors" && cs == "rock")) {
        computerScore += 1
        message = `You loose this round ! ${playerSelection} is beaten by ${computerSelection} !`;
    } else {
        playerScore += 1
        message = `You win this round ! ${playerSelection} beats ${computerSelection} !`;
    }
    return (message);
}

// Play "PlayRound" until someone have 3 points.

function game() {
    while (playerScore < 3 && computerScore < 3) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    getFinalResult();
}

function getFinalResult() {
    playerScore > computerScore ?
        console.log("Congratulation for this little victory.") :
        console.log("I wanna be humble but ... I absolutly crushed you !");
}
// Scoring

let playerScore = 0;
let computerScore = 0;

// Launch the game !

game();