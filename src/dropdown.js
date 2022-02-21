const dropdownList = document.querySelector('.dropdown__list');
const guestsPicker = document.querySelector('.guests-picker');
const dropdownInput = document.querySelector('.dropdown__input');

const quantityArrowMinus = document.querySelectorAll('.quantity-arrow-minus');
const quantityArrowPlus = document.querySelectorAll('.quantity-arrow-plus');
const removeBtn = document.querySelector('.remove__btn');
const applyBtn = document.querySelector('.apply__btn');

let quantityNumAdults = document.querySelector('.quantity-num--adults');
let quantityNumChildren = document.querySelector('.quantity-num--children');
let quantityNumBabies = document.querySelector('.quantity-num--babies');
let adultsCounter = 0;
let childrenCounter = 0;
let babiesCounter = 0;

function toggleDropdown() {
  dropdownList.classList.toggle('dropdown__list--open');
  dropdownInput.classList.toggle('dropdown__input--open');
  guestsPicker.classList.toggle('guests-picker--open');
}

function quantityMinus(e) {
  if (e === 'adults' && adultsCounter >= 1) {
    adultsCounter -= 1;
    quantityNumAdults.innerHTML = adultsCounter;
  }

  if (e === 'children' && childrenCounter >= 1) {
    childrenCounter -= 1;
    quantityNumChildren.innerHTML = childrenCounter;
  }

  if (e === 'babies' && babiesCounter >= 1) {
    babiesCounter -= 1;
    quantityNumBabies.innerHTML = babiesCounter;
  }

  if(adultsCounter === 0){
    guestsPicker.value = ''
  }else if (adultsCounter === 0 && childrenCounter === 0 && babiesCounter === 0) {
    guestsPicker.value = ''
  } else if(adultsCounter !== 0 && childrenCounter === 0 && babiesCounter === 0) {
    guestsPicker.value = `${adultsCounter} взрослых`
  }else if (childrenCounter === 0 && adultsCounter !== 0 &&  babiesCounter !== 0) {
    guestsPicker.value = `${adultsCounter} взрослых, ${babiesCounter} младенцев`
  }else if (babiesCounter === 0 && adultsCounter !== 0 && childrenCounter !== 0) {
    guestsPicker.value = `${adultsCounter} взрослых, ${childrenCounter} детей`
  } else {
    guestsPicker.value = `${adultsCounter} взрослых, ${childrenCounter} детей, ${babiesCounter} младенцев`
  }


  if(guestsPicker.value !== ''){
    removeBtn.style.display = 'block';
  } else {
    removeBtn.style.display = 'none';
  }
}

function quantityPlus(e) {
  if (e === 'adults') {
    adultsCounter += 1;
    quantityNumAdults.innerHTML = adultsCounter;
  }

  if (e === 'children') {
    childrenCounter += 1;
    quantityNumChildren.innerHTML = childrenCounter;
  }

  if (e === 'babies') {
    babiesCounter += 1;
    quantityNumBabies.innerHTML = babiesCounter;
  }

  if(adultsCounter === 0){
    guestsPicker.value = ''
  }else if (adultsCounter === 0 && childrenCounter === 0 && babiesCounter === 0) {
    guestsPicker.value = ''
  } else if(adultsCounter !== 0 && childrenCounter === 0 && babiesCounter === 0) {
    guestsPicker.value = `${adultsCounter} взрослых`
  }else if (adultsCounter !== 0 &&  babiesCounter !== 0 && childrenCounter === 0) {
    guestsPicker.value = `${adultsCounter} взрослых, ${babiesCounter} младенцев`
  }else if (adultsCounter !== 0 && childrenCounter !== 0 && babiesCounter === 0) {
    guestsPicker.value = `${adultsCounter} взрослых, ${childrenCounter} детей`
  } else {
    guestsPicker.value = `${adultsCounter} взрослых, ${childrenCounter} детей, ${babiesCounter} младенцев`
  }

  if(guestsPicker.value !== '' || quantityNumChildren.innerHTML !== '0' || quantityNumBabies.innerHTML !== '0'){
    removeBtn.style.display = 'block';
  } else {
    removeBtn.style.display = 'none';
  }
}

function clearInput() {
  guestsPicker.value = '';
  quantityNumAdults.innerHTML = '0';
  quantityNumChildren.innerHTML = '0';
  quantityNumBabies.innerHTML = '0';
  adultsCounter = 0;
  childrenCounter = 0;
  babiesCounter = 0;
  removeBtn.style.display = 'none';
}

function closeDropdown() {
  dropdownList.classList.remove('dropdown__list--open');
  dropdownInput.classList.remove('dropdown__input--open');
  guestsPicker.classList.remove('guests-picker--open');
}

dropdownInput.addEventListener('click', toggleDropdown);

window.addEventListener('click', function (e) {
  if (!dropdownList?.contains(e.target) && !dropdownInput?.contains(e.target)) {
    closeDropdown()
  }
})

quantityArrowMinus.forEach(btn => btn.addEventListener('click', (e) => quantityMinus(e.target.parentNode.dataset.name)));
quantityArrowPlus.forEach(btn => btn.addEventListener('click', (e) => quantityPlus(e.target.parentNode.dataset.name)));
removeBtn.addEventListener('click', clearInput)
applyBtn.addEventListener('click', closeDropdown)