//Prompt the user to type in Rock, Paper, or Scissors. Make case-insensitive
//use prompt()

const playerPrompt = prompt("Type in Rock, Paper, or Scissors");

//convert playerPromt to all lower case.
//Check that user chose Rock, Paper, or Scissors.
//Set Variable playerSelection().
const playerSelection = answerCheck();

function answerCheck() {
    const  setLowerCase = playerPrompt.toLowerCase();
    if (setLowerCase === "rock" || setLowerCase === "paper" || setLowerCase === "scissors") {
        console.log("Let us see who wins...")
    } else {
        alert("That was not one of the options. Refresh the page and try again");
    }
    return setLowerCase;
};

//Have Computer pick Rock, Paper, or Scissors at random.
//Set Variable computerSelection()

const computerSelection = getRandomChoice();
console.log(computerSelection);

function getRandomChoice() {
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

//Take playerSelection and computerSelection and determine who won.
//playRound()

let playerScore = 0;
let computerScore = 0;
let roundWinner = " ";

playRound(playerSelection, computerSelection);

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie";
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++
        roundWinner = "player";
    }
    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
      ) {
        computerScore++;
        roundWinner = "computer";
      }
}

console.log(playerScore, computerScore, roundWinner);

//Play a 5 round game that keeps score and reports a winner or loser at the end.
//game()...... use console.log() to display winner or loser.
