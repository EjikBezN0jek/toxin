const datepickerStart = $('#datepicker-start');
const datepickerEnd = $('#datepicker-end');

const datepicker = datepickerStart.datepicker({
  range: true,
  minDate: new Date(),
  clearButton: true,
  onSelect(formattedDate, date, inst) {
    if (date.length === 2) inst.hide()
    datepickerStart.val(formattedDate.split(',')[0]);
    datepickerEnd.val(formattedDate.split(',')[1]);
  },
  onShow(inst) {

  }
}).data('datepicker');

const buttons = document.querySelector(".datepicker--buttons")
buttons.insertAdjacentHTML('beforeend', `<span class="datepicker--button" onclick="datepicker.hide()" data-action="hide">Применить</span>`)

datepickerEnd.click(() => datepickerStart.focus());