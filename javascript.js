console.log("Hello World !");
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice == 0 ) {
        computerChoice="Rock";
    } else if (computerChoice == 1) {
        computerChoice="Paper";
    } else {
        computerChoice="Scissors";
    }
    return (computerChoice);
}

for (let i = 0 ; i < 20 ; i++) {
    console.log(getComputerChoice());
}
console.log("Yes !");