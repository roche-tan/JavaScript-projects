'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//seleccionar todas las clases que tengamos con show-modal con querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  //añadimos evento clic en cada botón
  btnsOpenModal[i].addEventListener('click', openModal);
// console.log('Button clicked');
//mostar modal. removing class "hidden" va sin .delante porque no estamos asignando a un selector, solo queremos la clase
// tambien pode mos hacer estilo de modal pasa de none a block:
// modal.style.display = 'block';

//el clic llama a la funcion de la variable anterior
btnCloseModal.addEventListener('click', closeModal);
//cerrar el modal al darle click
overlay.addEventListener('click', closeModal);

//miramos qué está pasando en el evento para saber qué hacer, por eso function(e). En este caso, para saber que key se está aprentadod
document.addEventListener('keydown', function (e) {
  // console.log('a key was pressed');
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
