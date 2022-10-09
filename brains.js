function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    };
};

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "This Round is a Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } 
    else if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
        computerScore++;
        return "You Lose! You cant spell";
    };
};

function game () {
    for (i = 1; i <= 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, Scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    };
    if (playerScore > computerScore) {
        console.log("You won the game - Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You lost the game - Player: " + playerScore + " Computer: " + computerScore);
    }else {
        console.log("It was a tie - Player: " + playerScore + " Computer: " + computerScore);
    };
};

console.log(game());