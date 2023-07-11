let pcPoints = 0;
let playerPoints = 0;
let roundsPlayed = 0;
const totalRounds = 5;

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
    pcPoints++;
  }
}

function game() {
  while (roundsPlayed < totalRounds) {
    let playerSelection = window.prompt("rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();
    console.log("Your choice is " + playerSelection);

    const computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection);

    playRound(playerSelection, computerSelection);

    console.log(
      "Scores: Player " + playerPoints + " || " + pcPoints + " Computer"
    );
    roundsPlayed++;
  }

  if (playerPoints > pcPoints) console.log("You won this match!");
  else if (playerPoints < pcPoints) console.log("Computer won this match!");
  else console.log("This match was a tie!");

  console.log("Game over! Reload to play again.");
}

game();
