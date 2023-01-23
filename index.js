let playerScore = 0
let computerScore = 0
let playerSelection;

const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", () => {
    results.textContent = playRound('rock');
});

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener("click", () => {
    results.textContent = playRound('paper');
});

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    results.textContent = playRound('scissors');
});

const compScore = document.querySelector(".computer_score");
compScore.innerHTML = "";

const userScore = document.querySelector(".player_score");
userScore.innerHTML = "";

const results = document.querySelector('.score-box');

function getComputerChoice() {
    let computerSelection = ['rock', 'paper', 'scissors']
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

function playRound(playerSelection) {

    if (gameOver()) {
        return "gameover"
    }

    const computerSelection = getComputerChoice();
    console.log('Play Round Called', playerSelection, computerSelection)

    let result;

    if (playerSelection === computerSelection) {
        playerScore++
        computerScore++
        result = "It's a tie!"
    }

    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        computerScore++

        result = "You lose!"
    }

    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++
        result = "You win!"
    } else {
        result = "something went wrong"
    }

    function gameOver() {
        if (playerScore == 5 || computerScore == 5) {
            return true;
        } else if (playerScore !== 5 || computerScore !== 5) {
            return false;
        }
    }

    checkWinner();
    userScore.innerHTML = playerScore
    compScore.innerHTML = computerScore
    if (gameOver()) {
        if (playerScore > computerScore) {
            return "You won! You're the best player in your chair"
        } else if (playerScore < computerScore) {
            return "Oh no! You lost..."
        } else if (playerScore == computerScore) {
            return "It's a tie!"
        }
        return result;
    }
}

function checkWinner() {
    let result;

    if (playerScore == 5) {
        result = "You win!"
    } else if (computerScore == 5) {
        result = "You lose!"
    } else if (playerScore == computerScore) {
        result = "It's a tie"
    } else {
        result = "something went wrong"
    } return result
}

function reset() {
    document.querySelector(".computer_score").innerHTML = 0;
    document.querySelector(".player_score").innerHTML = 0;
    document.querySelector(".score-box").innerHTML = "";
}
reset();

/*
if (playerScore > computerScore) {
    return 'You won against the computer!'
} else if (playerScore < computerScore) {
    return 'You lost to the computer!'
} else {
    return 'You tied the computer!'
} */