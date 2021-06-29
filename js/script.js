'use strict'
window.addEventListener('DOMContentLoaded', () => {
   const burger = document.querySelector('.burger'),
      burgerNav = document.querySelector('.burger-nav'),
      navBar = document.querySelector('.nav-bar'),
      parent = document.querySelector('.nav-bar__items');

   function burgerActive() {
      burger.addEventListener('click', () => {
         burger.classList.toggle('burger_active');
      });
   };
   burgerActive();

   function navPaint() {
      burger.addEventListener('click', () => {
         burgerNav.classList.toggle('turquoise');
      });
   };
   navPaint();

   function navActive() {
      burger.addEventListener('click', () => {
         navBar.classList.toggle('nav_active');
      });
   };
   navActive();

   function hideNav() {
      parent.addEventListener('click', (e) => {
         if (e.target && e.target.classList.contains('item__a')) {
            burger.classList.toggle('burger_active');
            burgerNav.classList.toggle('turquoise');
            navBar.classList.toggle('nav_active');
         }
      })
   };
   hideNav();
});