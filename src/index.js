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

// modal
const modalAuth = document.querySelector('.popup');
const btnAuth = document.querySelector('.header__signin');
const btnPopupClose = document.querySelector('.popup__button-close');

btnAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex';
});

btnPopupClose.addEventListener('click', () => {
  modalAuth.style.display = 'none';
});

btnPopupClose.addEventListener('click', () => {
  modalAuth.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    modalAuth.style.display = 'none';
  }
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalAuth.style.display = 'none';
  }
});

//reg
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

const users = {};

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

function createId(users) {
  return Object.keys(users).length;
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const nameUser = name.value;
  const emailUser = email.value;
  const passwordUser = password.value;

  const user = new User(nameUser, emailUser, passwordUser);

  const userId = 'User' + createId(users);
  users[userId] = user;

  console.log(users);
});
