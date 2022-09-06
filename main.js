const choices = ["Rock", "Paper", "Scissors"];


function chooseRandom(arr) {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

function getComputerChoice() {
    const choice = chooseRandom(choices);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result = (
        `${playerSelection} VS ${computerSelection}! `
    )

    // Make cases same to avoid potential errors
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //Check draw condition
    if (playerSelection === computerSelection) {
        result += "It's a draw!"
        return result
    }

    //Check for for win condition
    if (
        playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper"
    ) {
        result += "You win!";
        return result
    }

    //Lose Condition
    result += "You lose!";
    return result;

}

