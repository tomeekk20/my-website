"use strict";

const mobileNav = document.querySelector('.mobile-icon');
const navItems = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close');
const mobileItem = document.querySelector('.mobile-item');

mobileNav.addEventListener('click', function(e){
  navItems.classList.add('active-toggle');
});

closeBtn.addEventListener('click', function(e){
  navItems.classList.remove('active-toggle');
});

mobileItem.addEventListener('click', function(e){
  navItems.classList.remove('active-toggle');
});
