const buttons = document.querySelector("#choice");
const answer = document.querySelector("#result");

let result = ["good luck", 0];

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => {
  playRound(rockButton.textContent, getComputerChoice());
});

const scissorButton = document.createElement("button");
scissorButton.textContent = "Scissors";
scissorButton.addEventListener("click", () => {
  playRound(scissorButton.textContent, getComputerChoice());
});

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", () => {
  playRound(paperButton.textContent, getComputerChoice());
});

buttons.appendChild(rockButton);
buttons.appendChild(scissorButton);
buttons.appendChild(paperButton);

const updateResult = () => {
  if (result.at(1) > -5 && result.at(1) < 5) {
    answer.innerHTML = `${result.at(0)} <br> total points = ${result.at(1)}`;
  } else if (result.at(1) >= 5) {
    answer.textContent = `Congratulation! You won the game`;
    buttons.style.display = "none";
  } else if (result.at(1) <= -5) {
    answer.textContent = `You lose the game!`;
    buttons.style.display = "none";
  }
};

const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      result[0] = "It's a Tie";
    } else if (computerSelection === "Paper") {
      result[0] = "You Lose this round! Paper beats rock";
      result[1] += -1;
    } else {
      result[0] = "You Won this round! Rock beats Scissors!";
      result[1] += 1;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Paper") {
      result[0] = "It's a Tie";
    } else if (computerSelection === "Scissors") {
      result[0] = "You Lose this round! Scissors beats paper";
      result[1] += -1;
    } else {
      result[0] = "You won this round! Paper beats Rock";
      result[1] += 1;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Scissors") {
      result[0] = "It's a tie";
    } else if (computerSelection === "Rock") {
      result[0] = "You loose this round! Rock beats Scissors";
      result[1] += -1;
    } else {
      result[0] = "You won this round! Scissors beats Paper";
      result[1] += 1;
    }
  }
  updateResult();
};
updateResult();
