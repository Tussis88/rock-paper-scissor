const buttons = document.querySelector("#choice");
const answer = document.querySelector("#result");

let result = ["good luck", 0];

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => {
  let roundResult = playRound(rockButton.textContent, getComputerChoice());
  result[0] = roundResult.at(0);
  result[1] += roundResult.at(1);
  updateResult();
});

const scissorButton = document.createElement("button");
scissorButton.textContent = "Scissors";
scissorButton.addEventListener("click", () => {
  let roundResult = playRound(scissorButton.textContent, getComputerChoice());
  result[0] = roundResult.at(0);
  result[1] += roundResult.at(1);
  updateResult();
});

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", () => {
  let roundResult = playRound(paperButton.textContent, getComputerChoice());
  result[0] = roundResult.at(0);
  result[1] += roundResult.at(1);
  updateResult();
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
    if (computerSelection === "Rock") return ["It's a Tie", 0];
    else if (computerSelection === "Paper")
      return ["You Lose this round! Paper beats rock", -1];
    else return ["You won this round!! Rock beats Scissiors!", 1];
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Paper") return ["It's a Tie", 0];
    else if (computerSelection === "Scissors")
      return ["You Lose this round! Scissors bests paper", -1];
    else return ["You won this round! Paper beats Rock", 1];
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Scissors") return ["It's a Tie", 0];
    else if (computerSelection === "Rock")
      return ["You lose this round! Rock beats Scissors", -1];
    else return ["You won this round! Scissors beats Paper", 1];
  }
};
updateResult();
