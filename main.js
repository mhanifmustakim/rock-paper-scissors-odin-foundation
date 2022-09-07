const choices = ["rock", "paper", "scissors"];
const playerSelectionBtns = document.querySelectorAll(".player-select-btn");

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
        string: `${properCase(playerSelection)} VS ${properCase(computerSelection)}! `,
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

function properCase(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function startGame() {
    let isGameOver = false;
    let winScore = 5;
    let playerScore = 0;
    let computerScore = 0;

    const handleInput = (e) => {
        if (!isGameOver) {
            const playerChoice = e.target.getAttribute("data-choice");
            const computerChoice = getComputerChoice();
            const roundResult = playRound(playerChoice, computerChoice);

            //Update score
            if (roundResult.winner === "player") {
                playerScore += 1;
            } else if (roundResult.winner === "computer") {
                computerScore += 1;
            }

            //Log round results
            console.log(roundResult.string);
            console.log(`player: ${playerScore}`);
            console.log(`computer: ${computerScore}`);

            //Check for gameOver
            if (playerScore >= winScore || computerScore >= winScore) {
                isGameOver = true;
                console.log(`ROUND OVER! ${roundResult.winner} WON!`);
            }
        }
    }

    // Listen for player input
    playerSelectionBtns.forEach((btn) => {
        btn.addEventListener("click", handleInput);
    })
}
startGame();
