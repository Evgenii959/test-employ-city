// range
const rangeInput = document.getElementById('range');
const rangeValue = document.getElementById('range-value');

rangeInput.addEventListener('input', function () {
  rangeValue.textContent = `${rangeInput.value}%`;
});

// burger
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__links');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });
});

// select
const customSelectHeader = document.querySelector('.custom-select__header');
const customSelectOptions = document.querySelector('.custom-select__options');
const customSelectSelected = document.querySelector('.custom-select__selected');

customSelectHeader.addEventListener('click', () => {
  customSelectOptions.classList.toggle('active');
  customSelectHeader.classList.toggle('custom-select--open');
});

document.querySelectorAll('.custom-select__option').forEach((option) => {
  option.addEventListener('click', (e) => {
    customSelectSelected.textContent = e.target.textContent;
    customSelectOptions.classList.remove('active');
    customSelectHeader.classList.remove('custom-select--open');
  });
});