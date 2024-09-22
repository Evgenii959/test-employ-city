const rangeInput = document.getElementById('range');
const rangeValue = document.getElementById('range-value');

rangeInput.addEventListener('input', function () {
  rangeValue.textContent = `${rangeInput.value}%`;
});