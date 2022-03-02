const expandableFilters = document.querySelector('.expandable-filters');
const filters = document.querySelector('.filters');

function toggleFilters() {
  filters.classList.toggle('filters--open');
}


expandableFilters.addEventListener('click', toggleFilters)