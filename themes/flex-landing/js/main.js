"use strict";
/*
const mobileNav = document.querySelector('.mobile-icon');
const mainNav = document.querySelector('.mobile-nav');
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
}); */

function classToggle() {
  const nav = document.querySelector('.mobile-nav');

  nav.classList.toggle('active-toggle');
}
const mobileItems = document.querySelectorAll('.mobile-item');
  mobileItems.forEach(item => item.addEventListener('click', classToggle));
