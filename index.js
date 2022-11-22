let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random()* 3); 

    if (computerSelection == 0) {
        computerSelection = "rock"
    } else if (computerSelection == 1) {
        computerSelection = "paper"
    } else if (computerSelection == 2) {
        computerSelection = "scissors"
    } return computerSelection;
} 

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
            playerScore++
            computerScore++
            return "It's a tie!" }

    if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) { 
            computerScore++
            return "You lose!" }
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            playerScore++
            return "You win!" }

}        

    
const playerSelection = prompt("pick rock, paper or scissors").toLowerCase();
const computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("pick rock, paper or scissors")
        const computerSelection = getComputerChoice();
        console.log('1', playRound(playerSelection, computerSelection));
    }
    
    if (playerScore > computerScore) {
        return 'You won against the computer!' 
    }   else if (playerScore < computerScore) { 
        return 'You lost to the computer!' 
    }   else {
        return 'You tied the computer!'
    }
    
        } console.log('result', game())


