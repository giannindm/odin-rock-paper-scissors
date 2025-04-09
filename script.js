// generate computer choice
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break
        case 2:
            return "scissors";
            break
    }
}

// prompt player choice
function getPlayerChoice() {
    return prompt("Choose rock, paper or scissors").toLowerCase();
}


// play round
function playRound() {
    let winner = "";
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`You played ${playerChoice} and the computer played ${computerChoice}`);

// compare player choice against computer choice
// increment score of winner and log who won
    if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        winner = "player";
        playerScore += 1;
        console.log(`The ${winner} wins this round.`);
    }  else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) {
        winner = "computer";
        computerScore += 1;
        console.log(`The ${winner} wins this round.`);
    } else {
        console.log("It's a tie! Try again");
        playRound();
    }
}

// Play a game of 5 rounds, announcing each round before it starts
function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`We are now playing round ${i}!`)
        playRound();
        console.log(`Currently the score is:
            player: ${playerScore}
            computer: ${computerScore}`);
    }
    console.log(`The final score is:
        player: ${playerScore}
        computer: ${computerScore}`);
    playerScore > computerScore ? console.log("You win!") : console.log("The computer wins.");
}

// Initialize scores and play game
let playerScore = 0;
let computerScore = 0;
playGame();