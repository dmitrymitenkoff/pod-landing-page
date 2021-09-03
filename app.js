const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const small = document.querySelector('small');

function showSuccess() {
  emailInput.classList.add('success');
}

function showError() {
  small.classList.remove('hidden');
  emailInput.classList.add('error');
}

// Check email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (emailInput.value === '') {
    small.innerText = 'Oops! Please add your email!';
    showError();
  } else if (!isValidEmail(emailInput.value)) {
    small.innerText = 'Oops! Please check your email!';
    showError();
  } else {
    showSuccess();
    emailInput.value = '';
    form.remove();
  }
});
