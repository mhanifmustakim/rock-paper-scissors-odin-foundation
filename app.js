function computerPlay() {
    cpInput = parseInt(Math.random() * 3 + 1);
    switch (cpInput) {
        case 1:
            cpInput = "rock";
            break;
        case 2:
            cpInput = "paper";
            break;
        default:
            cpInput = "scissors";
    }
    return cpInput;
}

function playGame(playerSelection, computerSelection) {
    const winScript = `You Win! ${playerSelection} beats ${computerSelection}!`;
    const loseScript = `You Lose! ${computerSelection} beats ${playerSelection}!`;

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return winScript;
        } else {
            return loseScript;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return winScript;
        } else {
            return loseScript;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return winScript;
        } else {
            return loseScript;
        }
    } else {
        return null;
    }
}

