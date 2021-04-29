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

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    const winScript = `You Win! ${playerSelection} beats ${computerSelection}!`;
    const loseScript = `You Lose! ${computerSelection} beats ${playerSelection}!`;

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            pScore++;
            return winScript;
        } else {
            cScore++;
            return loseScript;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            pScore++;
            return winScript;
        } else {
            cScore++;
            return loseScript;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            pScore++;
            return winScript;
        } else {
            cScore++;
            return loseScript;
        }
    } else {
        return "You entered an invalid key";
    }
}

function game() {
    let input = prompt("Select rock,paper or scissors");
    console.log("***********************");
    console.log(playRound(input, computerPlay()));
    console.log(`player score is : ${pScore}, computer score is : ${cScore}`)
}

let cScore = 0, pScore = 0;
let isGameOver = false;
while (true) {
    game();
    if (pScore === 5) {
        console.log("Player Wins!")
        break;
    } else if (cScore === 5) {
        console.log("Computer Wins!");
        break;
    }
}