// variables for mobile menu
const hamburgerMenu = document.querySelector('.hamburger-js');
const mobileMenu = document.querySelector('.mobile-menu-js');
const closeMobileMenu = document.querySelector('.close-js');
const mobileNavigation = document.querySelectorAll('.mobile-menu-option');
const fade = document.querySelector('#element');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('hide');
  fade.style.filter = 'blur(3px)';
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hide');
  fade.style.filter = 'blur(0)';
});

mobileNavigation.forEach((item) => {
  item.addEventListener('click', () => {
    fade.style.filter = 'blur(0)';
    mobileMenu.classList.add('hide');
  });
});