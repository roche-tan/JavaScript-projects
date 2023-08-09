'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 25; // value al ser un valor que se introduce en el imput
console.log(document.querySelector('.guess').value);
*/

//evento en el boton de clic

//math.trunc quita los decimales del random
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const styleWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //cuando no hay input
  if (!guess) {
    displayMessage('⛔ No number!');
    // document.querySelector('.message').textContent = '⛔ No number!';

    //cuando el jugador gana
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);
    //cambiamos el background color cuando acertamos
    document.querySelector('body').style.backgroundColor = '#60b347';
    //cambiamos el tamaño del número acertado
    styleWidth('30rem');
    // document.querySelector('.number').style.width = '30rem';

    //instalar high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high! ' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high! ' : '📉 Too low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game!';
      displayMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //cuando el núm del jugador es superior al random
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //cuando el núm del jugador es inferior al random
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  // document.querySelector('.number').textContent = '?';
  displayNumber('?');
  document.querySelector('.guess').value = '';
  // document.querySelector('.number').style.width = '15rem';
  styleWidth('15rem');

  document.querySelector('body').style.backgroundColor = '#222';
});
