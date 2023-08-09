'use strict';

// seletcting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//crear variable para el dado
const diceEl = document.querySelector('.dice');

//select buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//asignamos variable para que sea accesible dentro de la función
let scores, currentScore, activePlayer, playing;

const init = function () {
  // añadir un hidden class para ocultar el dado
  // crear la hidden class en el css
  scores = [0, 0];
  //vaiable para guardar el score de las jugadas. No puede estar dentro de la función porque sino se pondrá a 0 cada vez que se clique el btnRoll
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  // we can remove a class even if it is note there
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // we add to player 0 because it was the first one in the begining. Even if the class is already there, it will not add a second one
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //añadiendo toogle a los 2 seguidores, nos aseguramos que si no está en uno, se añada. Esto se debe a que en el HTMl solo player--active está añadido a una de las clases
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generar un núm aleatorio de dado
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dado
    diceEl.classList.remove('hidden');
    //cambiar propiedad de la imagen que se muestra
    diceEl.src = `dice-${dice}.png`;

    // 3.check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      //se dinamiza el id del jugador que está tirando el dado
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player reasigning players. Si el active player es igual a 0, cambiar a 1 y viceversa
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    // scores[1]=scores[1]+currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >=100;
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
