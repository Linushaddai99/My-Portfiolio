// variables for mobile menu
const hamburgerMenu = document.querySelector('.hamburger-js');
const mobileMenu = document.querySelector('.mobile-menu-js');
const closeMobileMenu = document.querySelector('.close-js');
const mobileNavigation = document.querySelectorAll('.mobile-menu-option');
const fade = document.querySelector('#element');
const form = document.querySelector('.form-section');
const email = document.getElementById('email');
const error = document.querySelector('.error-mssg');


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


function validateForm() {
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    form.reset();
  } else {
    error.classList.remove('hide')
    error.innerHTML = 'Email must be in lower case';
  }
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});