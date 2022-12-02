function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') return 'tie';
    else if (computerSelection === 'paper') return 'computer';
    else if (computerSelection === 'scissors') return 'player';
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') return 'player';
    else if (computerSelection === 'paper') return 'tie';
    else if (computerSelection === 'scissors') return 'computer';
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') return 'computer';
    else if (computerSelection === 'paper') return 'player';
    else if (computerSelection === 'scissors') return 'tie';
  }
}

function createUI(){
  console.log('createUI');
  let winner = null;
  let playerScore = 0;
let computerScore = 0;
  
  const container = document.querySelector('#container');
  const buttonContainer = document.querySelector('#button-container');
  // create three buttons
  
  
  // create result display area
  const resultContainer = document.querySelector('#result-container');
  console.log(resultContainer);
  const newp = document.createElement('p');
  newp.textContent = 'Result: ';
  resultContainer.appendChild(newp);
  const scorep = document.createElement('p');
  scorep.textContent = `Computer: ${computerScore}   Player: ${playerScore}`
  resultContainer.appendChild(scorep);
  const winnerp = document.createElement('p');
  resultContainer.appendChild(winnerp);
  
  
  // bind listeners to the game buttons:
  // buttons is a node list. It looks and acts much like an array.
  const buttons = document.querySelectorAll('button');
  
  // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {
    
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      //alert(button.id);
      
      if (button.id === 'rock') {
        winner = playRound('rock', getComputerChoice());
      }
      else if (button.id === 'paper') {
        winner = playRound('paper', getComputerChoice());
      }
      else if (button.id === 'scissors') {
        winner = playRound('scissors', getComputerChoice());
      }
      else if (button.id === 'new-game-button') {
        computerScore = 0;
        playerScore = 0;
        winnerp.textContent = '';
        winner = '';
        newp.textContent = 'Result: ';
        scorep.textContent = `Computer: ${computerScore}   Player: ${playerScore}`

      }
      if (winner) {
        //alert(winner);
        newp.textContent = `Result: ${winner}`;
        if (winner === 'player') { playerScore++; }
        else if (winner === 'computer') {computerScore++; }
        scorep.textContent = `Computer: ${computerScore}   Player: ${playerScore}`
        if (computerScore >= 5) {
          winnerp.textContent = 'Computer wins!';
        } else if (playerScore >= 5) {
          winnerp.textContent = 'Player wins!';
        }
      }
    });
  });
  
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let choice = ['rock', 'paper', 'scissors'];
  return choice[getRandomInt(3)];
}
function getPlayerChoice() {
  let choice = "";
  while ((choice.toLowerCase() != 'rock') && (choice.toLowerCase() != 'scissors') && (choice.toLowerCase() != 'paper')) {
    choice = prompt("Rock, Paper or Scissors?");
  }
  return choice.toLowerCase();
}

function game() {



  createUI();
  let playerSelection = "rock";
  let computerSelection = "rock";
  // on click of a game button play a single round of the game
  
  
  
  

  //play a five round game
  //for(let i = 0;i < 5;i++) {
  //computerSelection = getComputerChoice();
  //playerSelection = getPlayerChoice();
  //winner = playRound(playerSelection, computerSelection);
  //if (winner === "player") { playerScore++; }
  //else if (winner === "computer") { computerScore++; }
  //console.log("Round " + (i+1) + " Winner: " + winner);
  //}
  //console.log("Final results:\nPlayer: " + playerScore + " Computer: " + computerScore);
  
}
let playerScore = 0;
let computerScore = 0;

game();


