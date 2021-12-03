// let playerSelection = prompt('Type your choice of rock, paper or scissors.');
let playerSelection = 'Rock';

function computerPlay() {
  let arr = ['rock', 'paper', 'scissors'];

  let random = Math.floor(Math.random() * 3);

  return arr[random];
}
let computerSelection = computerPlay();
console.log(computerSelection);

function playGame(playerSelection, computerSelection) {}

playGame(playerSelection, computerSelection);
