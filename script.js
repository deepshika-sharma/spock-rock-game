const playerScore = document.querySelector(".player-score");
const playerAction = document.querySelector(".player-action");
const playerActions = document.querySelectorAll(".player-actions i");
const playerRock = document.querySelector(".player-rock");
const playerPaper = document.querySelector(".player-paper");
const playerScissors = document.querySelector(".player-scissors");
const playerLizard = document.querySelector(".player-lizard");
const playerSpock = document.querySelector(".player-spock");
// Computer
const computerScore = document.querySelector(".computer-score");
const computerAction = document.querySelector(".computer-action");
const computerActions = document.querySelectorAll(".computer-actions i");
// Reset
const reset = document.querySelector(".fa-sync-alt");
// Game Info
const gameResults = document.querySelector(".game-results");

// Variables
let playerCount = 0;
let computerCount = 0;

const playerVsComputer = (playerHand) => {
  // Random action for computer
  let action = Math.floor(Math.random() * 5);
  for (let j = 0; j < computerActions.length; j++) {
    computerActions[j].style.color = "red";
  }
  let computerHand = computerActions[action];
  computerHand.style.color = "black";
  //   console.log(computerHand);

  for (let i = 0; i < playerActions.length; i++) {
    if (playerActions[i].classList.contains(playerHand)) {
      playerActions[i].style.color = "black";
    } else {
      playerActions[i].style.color = "blue";
    }
  }

  // Results
  if (
    playerHand === "player-rock" &&
    (computerHand.classList.contains("computer-lizard") ||
      computerHand.classList.contains("computer-scissors"))
  ) {
    confetti();
    playerCount++;
    playerScore.textContent = playerCount;
    gameResults.textContent = "You Won!";
  } else if (
    computerHand.classList.contains("computer-rock") &&
    (playerHand === "player-scissors" || playerHand === "player-lizard")
  ) {
    computerCount++;
    computerScore.textContent = computerCount;
    gameResults.textContent = "You Lost!";
  } else if (
    playerHand === "player-paper" &&
    (computerHand.classList.contains("computer-rock") ||
      computerHand.classList.contains("computer-spock"))
  ) {
    playerCount++;
    playerScore.textContent = playerCount;
    gameResults.textContent = "You Won!";
  } else if (
    computerHand.classList.contains("computer-paper") &&
    (playerHand === "player-rock" || playerHand === "player-spock")
  ) {
    computerCount++;
    computerScore.textContent = computerCount;
    gameResults.textContent = "You Lost!";
  } else if (
    playerHand === "player-scissors" &&
    (computerHand.classList.contains("computer-paper") ||
      computerHand.classList.contains("computer-lizard"))
  ) {
    playerCount++;
    playerScore.textContent = playerCount;
    gameResults.textContent = "You Won!";
  } else if (
    computerHand.classList.contains("computer-scissors") &&
    (playerHand === "player-paper" || playerHand === "player-lizard")
  ) {
    computerCount++;
    computerScore.textContent = computerCount;
    gameResults.textContent = "You Lost!";
  } else if (
    playerHand === "player-lizard" &&
    (computerHand.classList.contains("computer-spock") ||
      computerHand.classList.contains("computer-paper"))
  ) {
    playerCount++;
    playerScore.textContent = playerCount;
    gameResults.textContent = "You Won!";
  } else if (
    computerHand.classList.contains("computer-lizard") &&
    (playerHand === "player-spock" || playerHand === "player-paper")
  ) {
    computerCount++;
    computerScore.textContent = computerCount;
    gameResults.textContent = "You Lost!";
  } else if (
    playerHand === "player-spock" &&
    (computerHand.classList.contains("computer-scissors") ||
      computerHand.classList.contains("computer-rock"))
  ) {
    playerCount++;
    playerScore.textContent = playerCount;
    gameResults.textContent = "You Won!";
  } else if (
    computerHand.classList.contains("computer-spock") &&
    (playerHand === "player-scissors" || playerHand === "players-rock")
  ) {
    computerCount++;
    computerScore.textContent = computerCount;
    gameResults.textContent = "You Lost!";
  } else {
    playerCount++;
    playerScore.textContent = playerCount;
    computerCount++;
    computerScore.textContent = computerCount;
    gameResults.textContent = "It's A Tie!";
  }

  //   Confetti
  if (gameResults.textContent === "You Won!") {
    window.confetti({ particleCount: 1000, spread: 400 });
  }

  // Action
  if (playerHand === "player-rock") {
    playerAction.textContent = " ---Rock";
  }
  if (playerHand === "player-paper") {
    playerAction.textContent = " ---Paper";
  }
  if (playerHand === "player-scissors") {
    playerAction.textContent = " ---Scissors";
  }
  if (playerHand === "player-lizard") {
    playerAction.textContent = " ---Lizard";
  }
  if (playerHand === "player-spock") {
    playerAction.textContent = " ---Spock";
  }

  if (computerHand.classList.contains("computer-rock")) {
    computerAction.textContent = " ---Rock";
  }
  if (computerHand.classList.contains("computer-paper")) {
    computerAction.textContent = " ---Paper";
  }
  if (computerHand.classList.contains("computer-scissors")) {
    computerAction.textContent = " ---Scissors";
  }
  if (computerHand.classList.contains("computer-lizard")) {
    computerAction.textContent = " ---Lizard";
  }
  if (computerHand.classList.contains("computer-spock")) {
    computerAction.textContent = " ---Spock";
  }
};

// Event Listeners
// --> Player Hand
playerRock.addEventListener("click", () => {
  playerVsComputer("player-rock");
});

playerPaper.addEventListener("click", () => {
  playerVsComputer("player-paper");
});

playerScissors.addEventListener("click", () => {
  playerVsComputer("player-scissors");
});

playerLizard.addEventListener("click", () => {
  playerVsComputer("player-lizard");
});

playerSpock.addEventListener("click", () => {
  playerVsComputer("player-spock");
});

// --> Reset
reset.addEventListener("click", () => {
  playerCount = 0;
  computerCount = 0;
  playerScore.textContent = playerCount;
  computerScore.textContent = computerCount;
  for (let i = 0; i < playerActions.length; i++) {
    playerActions[i].style.color = "blue";
    computerActions[i].style.color = "red";
  }
  gameResults.textContent = "";
  playerAction.textContent = "";
  computerAction.textContent = "";
});
