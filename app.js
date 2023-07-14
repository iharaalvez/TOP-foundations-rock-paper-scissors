let computerPoints = 0;
let playerPoints = 0;
let rounds = 0;

/// GAME DYNAMICS

function getComputerChoice() {
  const pcChoices = ["rock", "paper", "scissors"];
  const choice = pcChoices[Math.floor(Math.random() * pcChoices.length)];

  switch (choice) {
    case "rock":
      computerRockBtn.style.cssText = "border: 4px #ad0505 solid;";
      computerPaperBtn.style.cssText = null;
      computerScissorsBtn.style.cssText = null;
      break;
    case "paper":
      computerRockBtn.style.cssText = null;
      computerPaperBtn.style.cssText = "border: 4px #ad0505 solid;";
      computerScissorsBtn.style.cssText = null;
      break;
    case "scissors":
      computerRockBtn.style.cssText = null;
      computerPaperBtn.style.cssText = null;
      computerScissorsBtn.style.cssText = "border: 4px #ad0505 solid;";
      break;
  }
  return choice;
}

function getPlayerChoice(choice) {
  switch (choice) {
    case "rock":
      playerRockBtn.style.cssText = "border: 4px #043dcc solid;";
      playerPaperBtn.style.cssText = null;
      playerScissorsBtn.style.cssText = null;
      break;
    case "paper":
      playerRockBtn.style.cssText = null;
      playerPaperBtn.style.cssText = "border: 4px #043dcc solid;";
      playerScissorsBtn.style.cssText = null;
      break;
    case "scissors":
      playerRockBtn.style.cssText = null;
      playerPaperBtn.style.cssText = null;
      playerScissorsBtn.style.cssText = "border: 4px #043dcc solid;";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    displayResult.textContent = "It was a tie!\n";
    displayHistorical.textContent =
      `${rounds}. ` + displayResult.textContent + displayHistorical.textContent;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    displayResult.textContent = "You won!\n";
    displayHistorical.textContent =
      `${rounds}. ` + displayResult.textContent + displayHistorical.textContent;
    playerScore.textContent = `${playerPoints}`;
  } else {
    computerPoints++;
    displayResult.textContent = "Computer won!\n";
    displayHistorical.textContent =
      `${rounds}. ` + displayResult.textContent + displayHistorical.textContent;
    computerScore.textContent = `${computerPoints}`;
  }
}

// UI OPTIONS

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const playerRockBtn = document.querySelector("#btn-playerRock");
const playerPaperBtn = document.querySelector("#btn-playerPaper");
const playerScissorsBtn = document.querySelector("#btn-playerScissors");
const computerRockBtn = document.querySelector("#btn-computerRock");
const computerPaperBtn = document.querySelector("#btn-computerPaper");
const computerScissorsBtn = document.querySelector("#btn-computerScissors");
const displayResult = document.querySelector("#display-result");
const displayHistorical = document.querySelector("#display-historical");
const restartBtn = document.querySelector("#btn-restart");
const endgameModal = document.querySelector(".modal-endgame");

computerScore.textContent = `${computerPoints}`;
playerScore.textContent = `${playerPoints}`;

playerPaperBtn.addEventListener("click", () => handleClick("paper"));
playerRockBtn.addEventListener("click", () => handleClick("rock"));
playerScissorsBtn.addEventListener("click", () => handleClick("scissors"));

restartBtn.addEventListener("click", () => handleRestart());


function handleClick(playerSelection) {
  rounds++;

  getPlayerChoice(playerSelection);

  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  console.log(
    "Scores: Player " + playerPoints + " || " + computerPoints + " Computer"
  );

  if (playerPoints == 5 || computerPoints == 5) {
    endgameModal.classList.add("modal-open");
    const resultEndgame = document.querySelector("#message-endgame");
    if (playerPoints > computerPoints)
      resultEndgame.textContent = "You have won!";
    else resultEndgame.textContent = "The computer has won!";

    console.log("Game over! Reload to play again.");
  }
}

function handleRestart() {
  playerPoints = 0
  computerPoints = 0
  rounds = 0;
  displayResult.textContent = ""
  displayHistorical.textContent = ""
  playerScore.textContent = `${playerPoints}`;
  computerScore.textContent = `${computerPoints}`;
  computerRockBtn.style.cssText = null;
  computerPaperBtn.style.cssText = null;
  computerScissorsBtn.style.cssText = null;
  playerRockBtn.style.cssText = null;
  playerPaperBtn.style.cssText = null;
  playerScissorsBtn.style.cssText = null;
  endgameModal.classList.remove('modal-open')
}
