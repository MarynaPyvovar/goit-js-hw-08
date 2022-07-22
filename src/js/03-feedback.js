import throttle from 'lodash.throttle';

const STORAGE_KEY = 'user-data';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const savedInfo = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputChange, 500));

fillFormWithSavedInfo();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputChange(e) {
  savedInfo[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedInfo));
}

function fillFormWithSavedInfo() {
  if (localStorage.getItem(STORAGE_KEY)) {
    email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
  }
}
