'use strict';

const element1 = document.querySelector('.switch-btn');
const element2 = document.querySelector('.switch');
const element3 = document.querySelector('.basic-price');
const element4 = document.querySelector('.professional-price');
const element5 = document.querySelector('.master-price');

element1.addEventListener('click', function () {
  element1.classList.toggle('on');
  element2.classList.toggle('switch-on');
  if (element1.classList.contains('on')) {
    element3.textContent = '19.99';
    element4.textContent = '24.99';
    element5.textContent = '39.99';
  } else {
    element3.textContent = '199.99';
    element4.textContent = '249.99';
    element5.textContent = '399.99';
  }
});
