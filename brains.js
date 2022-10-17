const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const btnReset = document.getElementById('reset');
const scoreArea1 = document.getElementById('scoreArea1');
const scoreArea2 = document.getElementById('scoreArea2');
const roundWinner = document.getElementById('roundWinner');

btnRock.addEventListener('click', () => game('rock'))
btnPaper.addEventListener('click', () => game('paper'))
btnScissors.addEventListener('click', () => game('scissors'))
btnReset.addEventListener('click', () => gameReset());

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
scoreArea1.textContent = 'Player: ' + playerScore;
scoreArea2.textContent = 'Computer: ' + computerScore;

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
};

//function that starts the game and plays till first person gets 5 points.
function game (playerSelection) {
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    roundWinner.textContent = (playRound(playerSelection, computerSelection));
    scoreArea1.textContent = ('Player: ' + playerScore);
    scoreArea2.textContent = ('Computer: ' + computerScore);
    if (playerScore == 5 && playerScore > computerScore) {
        roundWinner.textContent = 'Player wins Earth is saved!';
        roundWinner.style.backgroundColor = 'green';
        computerScore = 0;
        playerScore = 0;
        document.getElementById('container').innerText = '';
    } else if (computerScore == 5 && computerScore > playerScore) {
        roundWinner.textContent = 'Alien computer wins goodbye Earth';
        roundWinner.style.backgroundColor = '#a60303';
        computerScore = 0;
        playerScore = 0;
        document.getElementById('container').innerText = '';
    };
};



//Runs after Start Over btn is clicked.
function gameReset () {
    computerScore = 0;
    playerScore = 0;
    roundWinner.textContent = '';
    scoreArea.textContent = 'Player: ' + playerScore + '  ' + 'Computer: ' + computerScore;
    roundWinner.style.backgroundColor = 'black';
    window.location.reload()
}