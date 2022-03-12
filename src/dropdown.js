class DropdownItem {

  constructor(dropdownItem, parentDropdown) {
    this.value = 0;
    this.dropdownItem = dropdownItem;
    this.parentDropdown = parentDropdown;
    this.createItem()
    this.setListeners();
  }

  createItem() {
    this.dropdownItem.insertAdjacentHTML('beforeend', `
        <p class="input__label">${this.dropdownItem.dataset.label}</p>
        <div class="quantity-block flex">
            <button type="button" class="quantity-arrow-minus btn">-</button>
            <span class="quantity-num">${this.value}</span>
            <button type="button" class="quantity-arrow-plus btn">+</button>
        </div>
    `);
    this.quantityArrowMinus = this.dropdownItem.querySelector('.quantity-arrow-minus');
    this.quantityArrowPlus = this.dropdownItem.querySelector('.quantity-arrow-plus');
    this.quantityNum = this.dropdownItem.querySelector('.quantity-num');
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
    this.parentDropdown.dispatchEvent(new CustomEvent('changedDropdownValue', {detail: {name: this.dropdownItem.dataset.name, value: this.value}}))
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
      let name = dropdownItemNode.dataset.name;
      let label = dropdownItemNode.dataset.label?.toLowerCase();
      this.state[name] = { label, value: 0 }
      new DropdownItem(dropdownItemNode, this.dropdown)
    })
  }

  setListeners() {
    this.dropdownInput.addEventListener('click',() => this.toggle());
    this.applyBtn.addEventListener('click',() =>  this.toggle());
    this.removeBtn.addEventListener('click',() =>  this.clear());

    this.dropdown.addEventListener('changedDropdownValue', e => this.change(e.detail))
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




