'use strict';

const btnMenu = document.querySelector('.btnMenu');
const navList = document.querySelector('.nav-list');
const navA = document.querySelectorAll('.nav-a');

const navBtn = function () {
   btnMenu.addEventListener('click', function () {
      console.log('clicked');
      navList.classList.toggle('active');
      closeNav();
   });
};
function closeNav() {
   for (let i = 0; i < navA.length; i++) {
      navA[i].addEventListener('click', () => {
         navList.classList.remove('active');
         btnMenu.classList.remove('toggle');
      });
   }
}

navBtn();
