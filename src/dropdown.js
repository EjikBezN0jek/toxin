class DropdownItem {

  constructor(dropdownItem, name) {
    this.value = 0;
    this.name = name
    this.dropdownItem = dropdownItem;
    this.quantityArrowMinus = this.dropdownItem.querySelector('.quantity-arrow-minus');
    this.quantityArrowPlus = this.dropdownItem.querySelector('.quantity-arrow-plus');
    this.quantityNum = this.dropdownItem.querySelector('.quantity-num');

    this.setListeners();
  }

  setListeners() {
    this.quantityArrowMinus.addEventListener('click',() => this.change(this.value - 1));
    this.quantityArrowPlus.addEventListener('click', () => this.change(this.value + 1));
    document.addEventListener('clearDropdown', () => this.change(0));
  }

  change(value) {
    if (value < 0) return;
    this.value = value;
    this.quantityNum.innerHTML = this.value;
    document.dispatchEvent(new CustomEvent('changedDropdownValue', {detail: {name: this.name, value: this.value}}))
  }
}

class Dropdown {

  constructor(dropdown) {
    this.state = {};
    this.dropdown = dropdown;

    this.dropdownInput = this.dropdown.querySelector('.dropdown__input');
    this.dropdownList = this.dropdown.querySelector('.dropdown__list');
    this.dropdownPicker = this.dropdown.querySelector('.dropdown__picker');
    this.removeBtn = this.dropdown.querySelector('.remove__btn');
    this.applyBtn = this.dropdown.querySelector('.apply__btn');

    this.setListeners();
    this.setState();
  }

  setState() {
    let dropdownItems = this.dropdown.querySelectorAll('.js-dropdown-item');
    dropdownItems.forEach(dropdownItemNode => {
      let label = dropdownItemNode.querySelector('.input__label').innerHTML.toLowerCase();
      this.state[dropdownItemNode.dataset.name] = {label, value: 0}
      new DropdownItem(dropdownItemNode, dropdownItemNode.dataset.name)
    })
  }

  setListeners() {
    this.dropdownInput.addEventListener('click',() => this.toggle());
    this.applyBtn.addEventListener('click',() =>  this.toggle());
    this.removeBtn.addEventListener('click',() =>  this.clear());

    document.addEventListener('changedDropdownValue', e => this.change(e.detail))
    window.addEventListener('click',  (e) => !this.dropdown?.contains(e.target)
      && this.dropdownList.classList.contains('dropdown__list--open')
      && this.toggle())
  }

  change({name, value}) {
    this.state[name].value = value;
    let string = Object.values(this.state).map(item => item.value ? item.value + ' ' + item.label + ', ': '').join('');
    this.dropdownPicker.value = string.slice(0, string.length - 2);
    this.removeBtn.style.display = this.dropdownPicker.value ? 'block' : 'none';
  }

  toggle() {
    this.dropdownInput.classList.toggle('dropdown__input--open');
    this.dropdownList.classList.toggle('dropdown__list--open');
    this.dropdownPicker.classList.toggle('dropdown__picker--open');
  }

  clear() {
    this.dropdownPicker.value = '';
    this.removeBtn.style.display = 'none';
    document.dispatchEvent(new CustomEvent('clearDropdown'))
  }
}

let dropdowns = document.querySelectorAll('.js-dropdown');
dropdowns.forEach(dropdownNode => new Dropdown(dropdownNode))




