const hamburgerMenu = document.querySelector('.hamburger-js');
const mobileMenu = document.querySelector('.mobile-menu-js');
const closeMobileMenu = document.querySelector('.close-js');
const mobileNavigation = document.querySelectorAll('.mobile-menu-option');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('hide');
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hide');
});

mobileNavigation.forEach(item => {
  item.addEventListener('click', () => {
      mobileMenu.classList.add('hide');
  })
});
