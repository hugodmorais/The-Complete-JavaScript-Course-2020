'use strict';

// document.querySelector('.message').textContent = '🔥 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 35;

// document.querySelector('.guess').value


let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🔥 No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🔥 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '🙂 Too high!'
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '🙂 Too low!'
  }
;})