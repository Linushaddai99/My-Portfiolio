// variables for mobile menu
const hamburgerMenu = document.querySelector('.hamburger-js');
const mobileMenu = document.querySelector('.mobile-menu-js');
const closeMobileMenu = document.querySelector('.close-js');
const mobileNavigation = document.querySelectorAll('.mobile-menu-option');
const fade = document.querySelector('#element');

// variables for project popup
const popupWrapper = document.querySelector('.project-popup-wrapper');
const popupName = document.querySelector('.popup-name');
const popupPosition = document.querySelector('.popup-position');
const popupWorkName = document.querySelector('.popup-work-name')
const popupImage = document.querySelector('.popup-image');
const popupDescription = document.querySelector('.popup-description');
const popupTech = document.querySelector('.popup-technologies-container');
const projectOne = document.querySelector('#project-one');
const projectTwo = document.querySelector('#project-two');
const projectThree = document.querySelector('#project-three');
const projectFour = document.querySelector('#project-four');
const closePopup = document.querySelector('.close-project-popup');

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

closePopup.addEventListener('click', () => {
  popupWrapper.classList.add('hide');
    fade.style.filter = 'blur(0)';
})
