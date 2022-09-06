const choices = ["rock", "paper", "scissors"];


function chooseRandom(arr) {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

function getComputerChoice() {
    const choice = chooseRandom(choices);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result = {
        string: `${playerSelection} VS ${computerSelection}! `,
        winner: null,
    }

    // Make cases same to avoid potential errors
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //Check draw condition
    if (playerSelection === computerSelection) {
        result.string += "It's a draw!"
        result.winner = "draw";
        return result
    }

    //Check for for win condition
    if (
        playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper"
    ) {
        result.string += "You win!";
        result.winner = "player";
        return result
    }

    //Lose Condition
    result.string += "You lose!";
    result.winner = "computer";
    return result;

}

function startGame() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = prompt("Rock, paper, or scissors?");
        const computerChoice = getComputerChoice();

        // check if playerChoice is valid
        while (!choices.includes(playerChoice.toLowerCase().trim())) {
            playerChoice = prompt("Please enter either Rock, Paper or Scissors.");
        }

        const roundResult = playRound(playerChoice, computerChoice);

        if (roundResult.winner === "player") {
            playerScore += 1;
        } else if (roundResult.winner === "computer") {
            computerScore += 1;
        }

        console.log(roundResult.string);
        console.log(`player: ${playerScore}`);
        console.log(`computer: ${computerScore}`);
    }
}

startGame();
