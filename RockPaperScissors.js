let choices = ["Rock", "Paper", "Scissors"];
let selection;

function compChoice() {
  let choice = Math.trunc(Math.random() * 3);

  switch (choice) {
    case 0:
      selection = "rock";
      return selection;
    case 1:
      selection = "paper";
      return selection;
    case 2:
      selection = "scissors";
      return selection;
    default:
      selection = "rock";
      return selection;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log("player chose: " + playerSelection);
  switch (playerSelection) {
    case "rock":
      console.log("computer chose: " + computerSelection);
      if (computerSelection == "rock") {
        console.log("draw");
        return "draw";
        break;
      } else if (computerSelection == "paper") {
        console.log("Computer wins");

        return "computer wins";
        break;
      } else {
        console.log("Player wins");

        return "player wins";
        break;
      }

    case "paper":
      console.log("computer chose: " + computerSelection);

      if (computerSelection == "rock") {
        return "player wins";
        break;
      } else if (computerSelection == "paper") {
        return "draw";
        break;
      } else {
        return "computer wins";
        break;
      }
    case "scissors":
      console.log("computer chose: " + computerSelection);
      if (computerSelection == "rock") {
        return "compter wins";
        break;
      } else if (computerSelection == "paper") {
        return "player wins";
        break;
      } else {
        return "draw";
        break;
      }
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;
  let roundCount = 0;
  let result;
  let Input;

  while (roundCount < 5) {
    Input = prompt("Rock Paper Scissors...", "enter choice here");
    result = playRound(Input, compChoice());
    if (result == "player wins") {
      playerScore += 1;
    } else if (result == "computer wins") {
      compScore += 1;
    }
    roundCount += 1;
  }
  console.log("player score: " + playerScore + " computer score: " + compScore);

  playerScore >= compScore
    ? console.log("player victor ! ")
    : console.log("computer victor ! ");
}
game();
