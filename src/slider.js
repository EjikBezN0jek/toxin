class Slider {

  constructor(slider, hasDots = true, hasControls = true) {
    this.slider = slider;
    this.index = 0;

    this.slides = this.slider.querySelectorAll('.slider__item');
    if (hasControls) this.createControls();
    if (hasDots) this.createDots();
    this.setListeners();
    this.showSlides(this.index)
  }

  createControls() {
    this.slider.insertAdjacentHTML('beforeend', `
       <div class="slider__controls">
            <div class="slider__control slider__control--prev">
                <img src="./icons/slider-arrow.png" alt="">
            </div>
            <div class="slider__control slider__control--next">
                <img src="./icons/slider-arrow.png" alt="">
            </div>
       </div>
    `)

    this.buttonPrev = this.slider.querySelector('.slider__control--prev');
    this.buttonNext = this.slider.querySelector('.slider__control--next');
  }

  createDots() {
    let dots = Array.from(this.slides).map( _ => '<div class="dot"></div>').join('')
    this.slider.insertAdjacentHTML('beforeend', `
      <div class="slider__dots">${ dots }</div>
    `);
    this.dots = this.slider.querySelectorAll('.dot');
  }

  setListeners() {
     this.buttonPrev.addEventListener('click',() => this.showSlides(this.index - 1));
     this.buttonNext.addEventListener('click', () => this.showSlides(this.index + 1));
    if (this.dots?.length) this.dots.forEach((dot, i) => dot.addEventListener('click', () => this.showSlides(i)))
  }

  showSlides(n) {
    if (n >= this.slides.length ) this.index = 0
    else if (n < 0)  this.index = this.slides.length - 1
    else this.index = n;

    this.slides.forEach(item => item.classList.remove('slider__item--selected'));
    this.slides[this.index].classList.add('slider__item--selected');

    if (this.dots?.length) this.dots.forEach(dot => dot.classList.remove('dot--selected'));
    if (this.dots?.length) this.dots[this.index].classList.add('dot--selected');
  }
}

let sliders = document.querySelectorAll('.js-slider');
sliders.forEach(sliderNode => new Slider(sliderNode))

