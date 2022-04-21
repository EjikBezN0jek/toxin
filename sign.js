const signInForm = document.querySelector('.sign-in__form');
const registrationForm = document.querySelector('.registration__form');
const signBtns = document.querySelectorAll('.sign__btn');

function toggleForm() {
  signInForm.classList.toggle('show');
  registrationForm.classList.toggle('show');
}

if ((new URLSearchParams(window.location.search)).get('sign') === 'up') toggleForm()
signBtns.forEach(btn => btn.addEventListener('click', toggleForm));

function storeRegFormData () {
  const user = {
    name: registrationForm.name.value,
    surname: registrationForm.surname.value,
    sex: registrationForm.sex.value,
    date: registrationForm.date.value,
    email: registrationForm.email.value,
    password: registrationForm.password.value,
    special_offers: registrationForm.special_offers.value
  }
  console.log(user)
}

function storeSignFormData () {
  const user = {
    email: signInForm.email.value,
    password: signInForm.password.value,
  }
  console.log(user)
}

registrationForm.addEventListener('submit', storeRegFormData)
signInForm.addEventListener('submit', storeSignFormData)