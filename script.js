function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") return ["It's a Tie", 0]
    else if (computerSelection === "Paper") return ["You Lose! Paper beats rock", -1]
    else return ["You won!! Rock beats Scissiors!", 1]
  }
  else if (playerSelection === "Paper") {
    if (computerSelection === "Paper") return ["It's a Tie", 0]
    else if (computerSelection === "Scissors") return ["You Lose! Scissors bests paper", -1]
    else return ["You won! Paper beats Rock", 1]
  }
  else if (playerSelection === "Scissors") {
    if (computerSelection === "Scissors") return ["It's a Tie", 0]
    else if (computerSelection === "Rock") return ["You lose Rock beats Scissors", -1]
    else return ["You won! Scissors beats Paper", 1]
  }
}

function playGame() {
  let points = 0;
  for (let i = 0; i < 5; i++) {
    console.log("Round: ", i + 1);
    let playerChoice = prompt("Rock, Paper or Scissors");
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.substr(1);
    result = playRound(playerChoice, getComputerChoice());
    points += result[1];
    console.log(`${result[0]}.. Current Points = ${points}`); 
  }
}

playGame()
