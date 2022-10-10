const hamburgerMenu = document.querySelector('.hamburger-js');
const mobileMenu = document.querySelector('.mobile-menu-js');
const closeMobileMenu = document.querySelector('.close-js');
const mobileNavigation = document.querySelectorAll('.mobile-menu-option');
const body = document.querySelector('#element')

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('hide');
  body.style.filter = "blur(3px)";

});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hide');
  body.style.filter = "blur(0)";
});

mobileNavigation.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('hide');
  });
});
