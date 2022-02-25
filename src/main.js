const menuItem = document.querySelectorAll('.menu__item');

function changePage(link) {
  menuItem.forEach(link => link.classList.remove('menu__item--active'));
  link.classList.add('menu__item--active');
}

menuItem.forEach(link => link.addEventListener('click', (e) => changePage(e.target)))


