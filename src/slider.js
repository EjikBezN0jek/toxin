const slides = document.querySelectorAll('.slider__item');
const buttonPrev = document.querySelector('.slider__control--prev');
const buttonNext = document.querySelector('.slider__control--next');
const dots = document.querySelectorAll('.dot');

let slideIndex = 1;
showSlides(slideIndex);

dots.forEach((dot, i) => {
  dot.addEventListener('click', ()=> {
    slides.forEach(item => item.classList.remove('slider__item--selected'));
    dots.forEach(dot => dot.classList.remove('dot--selected'));

    slides[i].classList.add('slider__item--selected');
    dot.classList.add('dot--selected');
  })

  slideIndex = i;
})

function nextSlide() {
  showSlides(slideIndex += 1);
}

function showSlides(n) {

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }


  for (let slide of slides) {
    slide.classList.remove('slider__item--selected');
  }

  slides[slideIndex - 1].classList.add('slider__item--selected');
}


function previousSlide() {
  showSlides(slideIndex -= 1);
}

buttonPrev.addEventListener('click', previousSlide);
buttonNext.addEventListener('click', nextSlide);



