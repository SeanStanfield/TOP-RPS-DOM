let choices = ["Rock", "Paper", "Scissors"];
let selection;
let playerScore = 0;
let compScore = 0;
let roundCount = 0;

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
        compScore += 1;

        return "computer wins";
        break;
      } else {
        console.log("Player wins");
        playerScore += 1;

        return "player wins";
        break;
      }

    case "paper":
      console.log("computer chose: " + computerSelection);

      if (computerSelection == "rock") {
        console.log("player wins");
        playerScore += 1;

        return "player wins";
        break;
      } else if (computerSelection == "paper") {
        console.log("Draw");

        return "draw";
        break;
      } else {
        console.log("Computer wins");
        compScore += 1;

        return "computer wins";
        break;
      }
    case "scissors":
      console.log("computer chose: " + computerSelection);
      if (computerSelection == "rock") {
        console.log("computer wins");
        compScore += 1;

        return "compter wins";
        break;
      } else if (computerSelection == "paper") {
        console.log("player wins");
        playerScore += 1;

        return "player wins";
        break;
      } else {
        console.log("Draw");

        return "draw";
        break;
      }
  }
}

function updator() {
  if (playerScore >= 5) {
    alert("player wins");
  }

  if (compScore >= 5) {
    alert("computer wins");
  }

  if (roundCount >= 5) {
    alert("game over");
    return;
  }
}

function onRun() {
  //plays the round

  playRound(prompt("Choose"), compChoice());
  //increments the scores
  playerScoreDom.innerText = "player score: " + playerScore;
  compScoreDom.innerText = "computer score: " + compScore;
  //checks the score
  if (playerScore >= 5) {
    winnerText.textContent = "player wins";
  }

  if (compScore >= 5) {
    winnerText.textContent = "computer wins";
  }

  //updates visuals
}

const container = document.querySelector("#container");
// const winner = document.querySelector(".current-winner");
// winner.textContent = "play to update";

let playerScoreDom = document.createElement("p");
playerScoreDom.textContent = "player score: " + playerScore;
container.appendChild(playerScoreDom);

let compScoreDom = document.createElement("p");
compScoreDom.textContent = "computer score: " + compScore;
container.appendChild(compScoreDom);

const winnerText = document.createElement("h2");
winnerText.textContent = "get 5 points to win";
container.appendChild(winnerText);

const rock = document.createElement("button");
rock.classList.add("rock");
rock.id = "rock";
rock.style.backgroundColor = "darkGrey";
rock.textContent = "Rock button";

const paper = document.createElement("button");
paper.classList.add("paper");
paper.id = "paper";
paper.style.backgroundColor = "lightGrey";
paper.textContent = "paper button";

const scissors = document.createElement("button");
scissors.classList.add("scissors");
scissors.id = "scissors";
scissors.style.backgroundColor = "lightPink";
scissors.textContent = "scissors button";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    // playRound(button.id, compChoice());
    onRun();
  });
});

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
