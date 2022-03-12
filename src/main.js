const menuItems = document.querySelectorAll('.menu__item');
const burgerMenu = document.querySelector('.burger');
const closeBtn = document.querySelector('.btn-close');
const headerMenu = document.querySelector('.header__menu');
const overlay = document.querySelector('.header__overlay');

switch (window.location.pathname) {
  case "/product.html":
    setTitle("Шикарный номер")
    changePage(1)
    break;
  case "/catalog.html":
    setTitle("Каталог номеров")
    changePage(1)
    break;
  default:
    setTitle("Лучшие номера")
    changePage(0)
}

function setTitle(string) {
  document.title = string + ' | Toxin'
}

function toggleMenu() {
  headerMenu.classList.toggle('header__menu--open');
  burgerMenu.classList.toggle('burger');
  burgerMenu.classList.toggle('btn-close');
  overlay.classList.toggle('header__overlay--visible');
  document.body.classList.toggle('hidden')
}

function changePage(number) {
  menuItems.forEach(item => item.classList.remove('menu__item--active'));
  menuItems[number].classList.add('menu__item--active');
}

burgerMenu.addEventListener('click', toggleMenu)
closeBtn?.addEventListener('click', toggleMenu)
window.addEventListener('resize', () => headerMenu.classList.contains('header__menu--open') && toggleMenu())

