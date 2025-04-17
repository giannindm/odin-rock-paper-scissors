// initialize scores
playerScore = 0;
computerScore = 0;
const spanPlayerScore = document.createElement("span");
const spanComputerScore = document.createElement("span");
const paraChoices = document.createElement("p");

// get relevant DOM elements
const card = document.querySelector(".card");
const options = document.querySelector(".options");
const divRock = document.querySelector(".rock");
const divPaper = document.querySelector(".paper");
const divScissors = document.querySelector(".scissors");
const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissors = document.querySelector(".btnScissors");
const paraPlayerScore = document.querySelector(".playerScore");
const paraComputerScore = document.querySelector(".computerScore");
const divChoices = document.querySelector(".choices");

// listen for button clicks
btnRock.addEventListener("click", function (e) {
    playRound(e.target.className);
});
btnPaper.addEventListener("click", function (e) {
    playRound(e.target.className);
});
btnScissors.addEventListener("click", function (e) {
    playRound(e.target.className);
});

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

// get player choice based on button clicked
function getPlayerChoice(btnClicked) {
    if (btnClicked === "btnRock") {
        return "rock";
    } else if (btnClicked === "btnPaper") {
        return "paper";
    } else if (btnClicked === "btnScissors") {
        return "scissors";
    }
}


// play round
function playRound(btnClicked) {
    const playerChoice = getPlayerChoice(btnClicked);
    const computerChoice = getComputerChoice();
    
    paraChoices.textContent = `You played ${playerChoice} and the computer played ${computerChoice}.`;

// compare player choice against computer choice
// increment score of winner and log who won
    if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        playerScore += 1;
        spanPlayerScore.textContent = playerScore;
        paraPlayerScore.appendChild(spanPlayerScore);
        paraChoices.textContent += ' You win.'
    }  else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) {
        computerScore += 1;
        spanComputerScore.textContent = computerScore;
        paraComputerScore.appendChild(spanComputerScore);
        paraChoices.textContent += ' The computer wins.'
    } else {
        paraChoices.textContent += ' It\'s a tie. Play again.'
    }

    divChoices.appendChild(paraChoices);

    if (playerScore === 5) {
        const winMsg = document.createElement("p");
        winMsg.textContent = ("You win!");
        winMsg.setAttribute("class", "winMsg");
        card.appendChild(winMsg);
        endGame();
    } else if (computerScore === 5) {
        const winMsg = document.createElement("p");
        winMsg.textContent = ("The computer wins :(");
        winMsg.setAttribute("class", "winMsg");
        card.appendChild(winMsg);
        endGame();
    }
}

function endGame() {
    btnRock.remove();
    btnPaper.remove();
    btnScissors.remove();
    const btnPlayAgain = document.createElement("button");
    btnPlayAgain.textContent = "Play again.";
    options.appendChild(btnPlayAgain);
    btnPlayAgain.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        spanPlayerScore.textContent = playerScore;
        spanComputerScore.textContent = computerScore;
        const winMsg = document.querySelector(".winMsg");
        winMsg.remove();
        btnPlayAgain.remove();
        options.appendChild(btnRock);
        options.appendChild(btnPaper);
        options.appendChild(btnScissors);
    });
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
}