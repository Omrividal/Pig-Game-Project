'use strict';
const player = document.querySelector('.player');
const score = document.querySelector('.score');
const resetGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
let diceImage = document.querySelector('.dice');
let playerOneName = document.querySelector('#name--0');
let playerOneTotalScore = document.querySelector('#score--0');
let playerOneCurrentScore = document.querySelector('#current--0');
let playerOneBackground = document.querySelector('.player--0');
let playerTwoName = document.querySelector('#name--1');
let playerTwoTotalScore = document.querySelector('#score--1');
let playerTwoCurrentScore = document.querySelector('#current--1');
let playerTwoBackground = document.querySelector('.player--1');

const generateRandomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}
let num = generateRandomNumber();

let activeState = true;
diceImage.style.visibility = 'hidden';

rollDice.addEventListener('click', () => {
  num = generateRandomNumber();
  if (activeState == true) {
    diceImage.style.visibility = 'visible';
    diceImage.src = `dice-${num}.png`;
  }

  if (playerOneBackground.classList.contains('player--active') && activeState == true) {
    if (num !== 1) {
      let currentScoreAsNumber1 = Number(playerOneCurrentScore.textContent);
      playerOneCurrentScore.textContent = currentScoreAsNumber1 + num;

    } else {
      playerOneCurrentScore.textContent = 0;
      playerOneBackground.classList.remove('player--active');
      playerTwoBackground.classList.add('player--active');
    }
  } else if (playerTwoBackground.classList.contains('player--active') && activeState == true) {
    if (num !== 1) {
      let currentScoreAsNumber2 = Number(playerTwoCurrentScore.textContent);
      playerTwoCurrentScore.textContent = currentScoreAsNumber2 + num;
    } else {
      playerTwoCurrentScore.textContent = 0;
      playerTwoBackground.classList.remove('player--active');
      playerOneBackground.classList.add('player--active');
    }
  }
});

holdScore.addEventListener('click', () => {
  if (playerOneBackground.classList.contains('player--active') && num !== 1 && activeState == true) {
    let numberTotalScore = Number(playerOneTotalScore.textContent);
    playerOneTotalScore.textContent = numberTotalScore + Number(playerOneCurrentScore.textContent);
    // reset current value
    playerOneCurrentScore.textContent = 0;
  } else if (playerTwoBackground.classList.contains('player--active') && num !== 1 && activeState == true) {
    let numberTotalScore2 = Number(playerTwoTotalScore.textContent);
    playerTwoTotalScore.textContent = numberTotalScore2 + Number(playerTwoCurrentScore.textContent);
    // reset current value
    playerTwoCurrentScore.textContent = 0;
  }

  if (player.classList.contains('player--active') && score.textContent >= 100) {
    player.classList.add('player--winner');
    console.log('win')
    activeState = false;
  }
})

resetGame.addEventListener('click', () => {
  activeState == true;
  diceImage.style.visibility = 'hidden';
  player.classList.remove('player--winner');
  playerOneCurrentScore.textContent = 0;
  playerOneTotalScore.textContent = 0;
  playerTwoCurrentScore.textContent = 0;
  playerTwoTotalScore.textContent = 0;
})
