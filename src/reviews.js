const likeButtons = document.querySelectorAll('.reviews__likes');


function toggleLike(btn) {
  if(btn.classList.contains('reviews__likes--active')){
    btn.innerText = +btn.innerText - 1;
    btn.classList.remove('reviews__likes--active')
  } else {
    btn.classList.add('reviews__likes--active')
    btn.innerText = +btn.innerText + 1
  }

}

likeButtons.forEach(btn => btn.addEventListener('click', (e) => toggleLike(e.target)))