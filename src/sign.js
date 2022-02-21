const signInForm = document.querySelector('.sign-in__form');
const registrationForm = document.querySelector('.registration__form');
const signBtns = document.querySelectorAll('.sign__btn')

function toggleForm() {
  signInForm.classList.toggle('show');
  registrationForm.classList.toggle('show');
}

if ((new URLSearchParams(window.location.search)).get('sign') === 'up') toggleForm()
signBtns.forEach(btn => btn.addEventListener('click', toggleForm));