const dateselector = document.querySelector('.dateselector');
let dateselectorStart = null;
let dateselectorEnd = null
const config = {
  range: true,
  minDate: new Date(),
  clearButton: true,
  multipleDatesSeparator: ' - ',
}

// Add input
dateselector.insertAdjacentHTML("afterbegin", `
    <div class="datepicker__item">
            <input class="dateselector-start datepicker__input input" placeholder="ДД.ММ.ГГГГ" readonly="readonly">
    </div>
`)

dateselectorStart = $('.dateselector-start');

// If double mode
if (dateselector.classList.contains('double')) {
  dateselector.insertAdjacentHTML("beforeend", `
    <div class="datepicker__item">
            <input class="dateselector-end datepicker__input input" placeholder="ДД.ММ.ГГГГ" readonly="readonly">
    </div>
  `);

  dateselectorEnd = $('.dateselector-end');
  dateselectorEnd.click(() => dateselectorStart.focus());

  config.onSelect = function (formattedDate) {
    dateselectorStart?.val(formattedDate.split(' - ')[0]);
    dateselectorEnd?.val(formattedDate.split(' - ')[1]);
  }
}

// Init datepicker
const datepicker = dateselectorStart.datepicker(config).data('datepicker');

// Add apply button
const buttons = document.querySelector(".datepicker--buttons")
buttons.insertAdjacentHTML('beforeend', `<span class="datepicker--button" onclick="datepicker.hide()" data-action="hide">Применить</span>`)