console.log("Hello World !");
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

function playRound(playerSelection, computerSelection) {
    let ps = (playerSelection.toLowerCase());
    let cs = (computerSelection.toLowerCase());
    let result = "";
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

function game() {
    while (playerScore < 3 && computerScore < 3) {
        console.log(playRound(getComputerChoice(), getComputerChoice()));
    }
}

let playerScore = 0;
let computerScore = 0;

game();