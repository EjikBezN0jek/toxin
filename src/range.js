
let priceMin = document.querySelector('.range__price--min');
let priceMax = document.querySelector('.range__price--max');

const rangeBar = document.querySelector('.range__bar');
const toggleMin = document.querySelector('.range__toggle--min');
const toggleMax = document.querySelector('.range__toggle--max');

let sliderCoords = getCoords(rangeBar);
let rangeEnd = rangeBar.offsetWidth;
let min = parseInt(getComputedStyle(toggleMin).left);
let max = parseInt(getComputedStyle(toggleMax).left);

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    left: box.left + pageXOffset
  };
}

toggleMin.ondragstart = () => false
toggleMax.ondragstart = () => false;

toggleMin.onmousedown = function(e) {
  let thumbCoords = getCoords(toggleMin);
  let shiftX = e.pageX - thumbCoords.left;

  document.onmousemove = function(e) {
    let newLeft = e.pageX - shiftX - sliderCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    min = Math.ceil((newLeft / rangeEnd) * 100);

    if(min >= max) {
      toggleMin.style.left = (max - 5) + '%';
    } else {
      toggleMin.style.left = min + '%';
    }
  }

  document.onmouseup = function() {
    // console.log(getCoords(toggleMin));
    // console.log(min);
    // console.log(max);
    document.onmousemove = document.onmouseup = null;
  }

  return false;
};

toggleMax.onmousedown = function(e) {
  let thumbCoords = getCoords(toggleMax);
  let shiftX = e.pageX - thumbCoords.left;

  document.onmousemove = function(e) {
    let newLeft = e.pageX - shiftX - sliderCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    if (newLeft < min) {
      newLeft = min - toggleMax.offsetWidth / 2 ;
    }

    if (newLeft > rangeEnd ) {
      newLeft = rangeEnd ;
    }

    max = Math.ceil((newLeft / rangeEnd) * 100);

    if(max <= min) {
      toggleMax.style.left = (min + 5) + '%';
    } else {
      toggleMax.style.left = max + '%';
    }
  }

  document.onmouseup = function() {
    // console.log(getCoords(toggleMax));
    // console.log(max);
    document.onmousemove = document.onmouseup = null;
  }

  return false;
};



