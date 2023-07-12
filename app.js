let computerPoints = 0;
let playerPoints = 0;

/// GAME DYNAMICS

function getComputerChoice() {
  const pcChoices = ["rock", "paper", "scissors"];
  return pcChoices[Math.floor(Math.random() * pcChoices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It was a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You won!");
    playerPoints++;
  } else {
    console.log("Computer won!");
    computerPoints++;
  }
}

// UI OPTIONS

const playerScore = document.getElementById("player--score");
const computerScore = document.getElementById("computer--score");
const playerRockBtn = document.getElementById("btn-playerRock");
const playerPaperBtn = document.getElementById("btn-playerPaper");
const playerScissorsBtn = document.getElementById("btn-playerScissors");
const computerRockBtn = document.getElementById("btn-computerRock");
const computerPaperBtn = document.getElementById("btn-computerPaper");
const computerScissorsBtn = document.getElementById("btn-computerScissors");

playerPaperBtn.addEventListener(handleClick("paper"));
playerRockBtn.addEventListener(handleClick("rock"));
playerScissorsBtn.addEventListener(handleClick("scissors"));

function handleClick(playerSelection) {

    console.log("Your choice is " + playerSelection);

    const computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection);

    playRound(playerSelection, computerSelection);

    console.log(
      "Scores: Player " + playerPoints + " || " + computerPoints + " Computer"
    );

    if (playerPoints == 5 || computerPoints == 5) {
      console.log("Game over! Reload to play again.");
    }
}
