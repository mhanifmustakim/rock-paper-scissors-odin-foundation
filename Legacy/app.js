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
    const winScript = `You Win! ${playerSelection} beats ${computerSelection}!`;
    const loseScript = `You Lose! ${computerSelection} beats ${playerSelection}!`;

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        pScore++;
        return winScript;

    } else if (playerSelection === "paper" && computerSelection === "rock") {

        pScore++;
        return winScript;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        pScore++;
        return winScript;

    } else {
        cScore++;
        return loseScript;
    }
}

function checkGameOver() {
    if (pScore === EndScore || cScore === EndScore) {
        playerSelectBtns.forEach((btn) => {
            btn.disabled = true;
        })
        isGameOver = true;
        if (pScore > cScore) {
            consoleDisp.innerHTML = "Humans win!<br>Press <kbd>Space</kbd> to restart"
        } else {
            consoleDisp.innerHTML = "Robots win!<br>Press <kbd>Space</kbd> to restart"
        }
    }
}

function Reset() {
    playerSelectBtns.forEach((btn) => {
        btn.disabled = false;
    })
    cScore = 0, pScore = 0;
    pScoreDisp.textContent = pScore;
    cScoreDisp.textContent = cScore;
    isGameOver = false;
    consoleDisp.textContent = "...";
}


let cScore = 0, pScore = 0;
let isGameOver = false;
let EndScore = 5;

const playerSelectBtns = document.querySelectorAll(".play-btn");
const consoleDisp = document.querySelector("#consoleDisp");
const pScoreDisp = document.querySelector("#pScoreDisp");
const cScoreDisp = document.querySelector("#cScoreDisp");

playerSelectBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        let pSelect = btn.textContent.toLowerCase();
        consoleDisp.textContent = playRound(pSelect, computerPlay());
        pScoreDisp.textContent = pScore;
        cScoreDisp.textContent = cScore;
        checkGameOver();
    })
})

window.addEventListener("keyup", function (e) {
    if (e.keyCode == 32 && isGameOver) {
        Reset();
    }
})
