'use strict';
// 1.Giving Check button functionality✔
// 2.Creating secret number and Score with initial value as 20 ✔
// 3.giving functionality to message
// 4.giving functionality to score element ✔
// 5.giving functionality to highscore element
// 6.giving functionality to Again! button

//creating secret number
let secret = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//configtring the "check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guessed = Number(document.querySelector('.guess').value);
  console.log(guessed, typeof guessed);
  if (!guessed) {
    document.querySelector('.message').textContent = '🛑 Not a Number';
  } else {
    //need to compare with the secret number ,let's go top and create a global secret number using let and Math.random

    //now the secret number is ready,let's access it
    if (guessed > secret) {
      document.querySelector('.message').textContent = '📈High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guessed < secret) {
      document.querySelector('.message').textContent = '📉 Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎉 Correct!';
      highScore = score > highScore ? score : highScore;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.check').ariaDisabled = true;

      //refresh the score and start a new game on clicking "Again!"
    }
  }
});
document.querySelector('.again').addEventListener('click', newGame);

function newGame() {
  document.querySelector('.check').ariaDisabled = false;
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing..';
  secret = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
}
