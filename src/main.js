const menuItem = document.querySelectorAll('.menu__item');

const burgerMenu = document.querySelector('.burger');
const closeBtn = document.querySelector('.btn-close');
const headerMenu = document.querySelector('.header__menu');
const overlay =document.querySelector('.header__overlay');


function toggleMenu() {
  headerMenu.classList.toggle('header__menu--open');
  burgerMenu.classList.toggle('burger');
  burgerMenu.classList.toggle('btn-close');
  overlay.classList.toggle('header__overlay--visible');
}

burgerMenu.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)

// function changePage(link) {
//   menuItem.forEach(link => link.classList.remove('menu__item--active'));
//   link.classList.add('menu__item--active');
// }
//
// menuItem.forEach(link => link.addEventListener('click', (e) => changePage(e.target)))


