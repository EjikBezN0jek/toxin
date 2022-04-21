const slider = document.getElementById('range');

noUiSlider.create(slider, {
  start: [5000, 10000],
  connect: true,
  range: {
    'min': 0,
    'max': 15000,
  }
});

let priceMin = document.querySelector('.range__price--min');
let priceMax = document.querySelector('.range__price--max')

slider.noUiSlider.on('update', function (values, handle) {
  let value = values[handle];

  if (handle) {
    priceMax.value = Math.round(value);
    priceMax.innerHTML = `${priceMax.value}`
  } else {
    priceMin.value = Math.round(value);
    priceMin.innerHTML = `${priceMin.value}`
  }
});



