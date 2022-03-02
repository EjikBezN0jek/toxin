const expandableCheckbox = document.querySelector('.expandable-checkbox');
const checkboxTitle = document.querySelector('.expandable-checkbox__label');
const checkboxHidden = document.querySelector('.expandable-checkbox__list');

function toggleCheckbox() {
  checkboxTitle.classList.toggle('expandable-checkbox__label--open');
  checkboxHidden.classList.toggle('expandable-checkbox__list--open');
}

expandableCheckbox.addEventListener('click', toggleCheckbox);