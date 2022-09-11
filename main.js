const choices = ["rock", "paper", "scissors"];
const playerSelection = document.querySelector("#player-select");
const playerSelectionBtns = playerSelection.querySelectorAll(".player-select-btn");
const gameLog = document.querySelector("#game-log");
const resetBtn = document.querySelector("#reset-btn");

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

function updateGameLog(roundResult, playerScore, computerScore, isGameOver = false) {
    const logContent = gameLog.querySelector("#log-content");

    if (isGameOver) {
        logContent.innerText = `
        \nROUND OVER! ${roundResult.winner} WON!`;
    } else {
        logContent.innerText = `
        \n${roundResult.string}`
    }

    logContent.innerText += `
    \nPlayer Score: ${playerScore} 
    \nComputer Score: ${computerScore}`
}

function updateUI(playerChoice, computerChoice) {
    const onTransitionEnd = (e) => {
        if (e.propertyName == "transform") {
            e.target.classList.remove("selected");
        }
    }

    const computerSelect = document.querySelector("#computer-select");
    const playerSelect = document.querySelector("#player-select");

    computerSelect.querySelector(`button[data-choice= ${computerChoice}]`).classList.add("selected");
    playerSelect.querySelector(`button[data-choice= ${playerChoice}]`).classList.add("selected");

    computerSelect.addEventListener("transitionend", onTransitionEnd);
    playerSelect.addEventListener("transitionend", onTransitionEnd)
}

resetBtn.addEventListener("click", () => {
    playerSelectionBtns.forEach((btn) => {
        btn.classList.remove("selected");
        btn.classList.remove("display-none");
    })
    gameLog.querySelector("#log-content").innerText = "";
    resetBtn.classList.add("display-none");
    startGame();
})

function startGame() {
    let isGameOver = false;
    let winScore = 5;
    let playerScore = 0;
    let computerScore = 0;

    const handleInput = (e) => {
        if (isGameOver) {
            return
        }

        const playerChoice = e.target.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);

        //Update UI of computer & player Selection
        updateUI(playerChoice, computerChoice);

        //Update score
        if (roundResult.winner === "player") {
            playerScore += 1;
        } else if (roundResult.winner === "computer") {
            computerScore += 1;
        }

        //Log round results
        updateGameLog(roundResult, playerScore, computerScore);

        //Check for gameOver
        if (playerScore >= winScore || computerScore >= winScore) {
            isGameOver = true;
            updateGameLog(roundResult, playerScore, computerScore, isGameOver);
            playerSelectionBtns.forEach((btn) => {
                btn.classList.add("display-none")
            })
            resetBtn.classList.remove("display-none");
        }
    }

    // Listen for player input
    playerSelectionBtns.forEach((btn) => {
        btn.addEventListener("click", handleInput);
    })
}
startGame();
