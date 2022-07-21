import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit());
refs.email.addEventListener('input'.onInputChange());
refs.message.addEventListener('input'.onInputChange());

function onFormSubmit() {}

function onInputChange(e) {
  const text = e.target.value;
  localStorage.setItem('message', text);
}
