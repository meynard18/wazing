/* 'use strict'; */

const navList = document.querySelector('.nav-list');
const navA = document.querySelectorAll('.nav-a');
const bodyEl = document.getElementsByTagName('body');

const navBtn = function () {
   document.querySelector('.btnMenu').addEventListener('click', function () {
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

document.onreadystatechange = function () {
   if (document.readyState == 'complete') {
      navBtn();
   }
};
