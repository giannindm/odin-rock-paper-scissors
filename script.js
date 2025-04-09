// initialize both scores

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

// prompt user choice

// play round
// compare user choice against computer choice
// if there is a winner, increment winner score and declare winner of round
// if there is a tie, then generate a new computer choice, and prompt a new user choice, then compare choices again