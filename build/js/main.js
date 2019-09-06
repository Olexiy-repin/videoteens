'use strict'; // DOWNLOAD YOUTUBE IFRAME

const tabletPicture = document.querySelector('.tablet__content picture');
let iframe = document.createElement('iframe');
iframe.src = 'http://www.youtube.com/embed/hdOM1mcNh3o?&amp&autoplay=1&rel=0&showinfo=0';
iframe.width = '100%';
iframe.height = '100%';
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allowfullscreen', '1');
iframe.setAttribute('autoplay', '1');

function replaceOnFrame(e) {
  this.replaceWith(iframe);
}

tabletPicture.addEventListener('click', replaceOnFrame); // OPEN MODAL

const modalBtn = document.querySelector('.right-content__btn');
const modalWindow = document.querySelector('.modal');

let openModal = e => {
  e.stopPropagation();
  modalWindow.classList.add('modal_active');
};

let closeModal = e => {
  e.stopPropagation();

  if (e.target.classList.contains('modal') || e.target.closest('.close-btn')) {
    modalWindow.classList.remove('modal_active');
  }
};

modalBtn.addEventListener('click', openModal);
modalWindow.addEventListener('click', closeModal);