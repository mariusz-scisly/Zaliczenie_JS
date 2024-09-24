const form = document.getElementById('contactForm');
const summarySection = document.getElementById('summary');
const editButton = document.getElementById('editButton');
const confirmButton = document.getElementById('confirmButton');

const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const passwordField = document.getElementById('password');
const termsField = document.getElementById('terms');

const summaryUsername = document.getElementById('summaryUsername');
const summaryEmail = document.getElementById('summaryEmail');
const summaryPhone = document.getElementById('summaryPhone');
const summaryPassword = document.getElementById('summaryPassword');

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((error) => error.textContent = '');
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePhone(phone) {
  const phonePattern = /^[0-9]{9}$/;
  return phonePattern.test(phone);
}

function validatePassword(password) {
  const hasUppercase = /[A-Z]/.test(password);
  return password.length >= 8 && hasUppercase;
}

function validateFormData() {
  let isValid = true;
  clearErrors();

  if (!validateEmail(emailField.value)) {
    document.getElementById('emailError').textContent = 'Wprowadź poprawny adres email.';
    isValid = false;
  }

  if (!validatePhone(phoneField.value)) {
    document.getElementById('phoneError').textContent = 'Wprowadź poprawny numer telefonu.';
    isValid = false;
  }

  if (!validatePassword(passwordField.value)) {
    document.getElementById('passwordError').textContent = 'Hasło musi posiadać min. 8 znaków i jedną dużą literę.';
    isValid = false;
  }

  if (!termsField.checked) {
    document.getElementById('termsError').textContent = 'Musisz wyrazić zgodę.';
    isValid = false;
  }

  return isValid;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (validateFormData()) {
    form.classList.add('hidden');
    summarySection.classList.remove('hidden');

    summaryUsername.textContent = usernameField.value;
    summaryEmail.textContent = emailField.value;
    summaryPhone.textContent = phoneField.value;
    summaryPassword.textContent = passwordField.value.replace(/./g, '*');
  }
});

editButton.addEventListener('click', function () {
  form.classList.remove('hidden');
  summarySection.classList.add('hidden');
});

confirmButton.addEventListener('click', function () {
  alert('Formularz został wysłany');
});