'use strict';

//accessing elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let score, currentScore, currentPlayer, playing;

const init = function () {
  //state variables
  score = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  diceEl.classList.add('hidden');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generate a Random Number in between 1 an 6.
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.Display the dice of that generated Number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3.Update current score till 1 is encountered to the player.
    if (dice !== 1) {
      //add to the Current Score
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      //swith the player and reset the currentScore
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //1 Add current score to current player's SCORE
    score[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      score[currentPlayer];

    // 2. Check if the player's score is >=100
    // Yes->finish the game
    if (score[currentPlayer] >= 20) {
      //finish the game
      playing = false;
      //change background
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('hidden');
      diceEl.classList.add('hidden');
    } else {
      //No->switch the player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  console.log('New Game Button Clicked');
  init();
});
