'use strict';
//step 1: create DOM variables
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//step 2: what to show when clicked on buttons -->modal and overlay
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

//step 3: 'X' configure it.
closeModal.addEventListener('click', close);
//step 4: when clicked on the overlay while modal displayed ,the modal should be closed.
overlay.addEventListener('click', close);

//step 5: closing the modal on the pressing of 'Esc' key.
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
