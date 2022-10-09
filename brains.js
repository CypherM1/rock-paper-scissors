// Function that uses a random number generator to help the computer make a choice.
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

//Initial Score for computer and player.
let playerScore = 0;
let computerScore = 0;

//Function that decides and returns who wins and loses. Then increases the score by 1 or 0.
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

//function that starts the game and plays through 5 rounds.
function game () {
    // plays 5 rounds and logs who wins each round.
    for (i = 1; i <= 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, Scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    };
    //At the end of 5 rounds, the below code logs the winner of the game.
    if (playerScore > computerScore) {
        console.log("You won the game - Player: " + playerScore + " Computer: " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You lost the game - Player: " + playerScore + " Computer: " + computerScore);
    }else {
        console.log("It was a tie - Player: " + playerScore + " Computer: " + computerScore);
    };
};

//This kicks off the function to start the game.
console.log(game());