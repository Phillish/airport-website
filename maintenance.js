// gets values from form
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
console.log("fullname: " + fullname);
const model = document.getElementById('model');
console.log("model: " + model);
const email = document.getElementById('email');
console.log("email: " + email);
const phone = document.getElementById('phone');
console.log("phone: " + phone);
const subject = document.getElementById('subject');
console.log("subject: " + subject);
const messageInput = document.getElementById('messageInput');
console.log("messageInput: " + messageInput);
const myCheckbox = document.getElementsByClassName('myCheckbox');
console.log("myCheckbox: " + myCheckbox);


// only allows user to send form after text values are validated
form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

// adds and removes error message and properties to text boxes
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

// adds and removes success message and properties to text boxes
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

// checks if email is valid or not
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// checks if text value are valid or not
const validateInputs = () => {
  const nameValue = fullname.value.trim();
  const modelValue = model.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = messageInput.value.trim();
  var valid = false;

  if(nameValue === '') {
      setError(fullname, 'Name is required');
      console.log("fullname: " + nameValue);
  } else {
      setSuccess(fullname);
      console.log("fullname: " + nameValue);
  }

  if(modelValue === '') {
    setError(model, 'Model is required');
    console.log("model: " + modelValue);
  } else {
    setSuccess(model);
    console.log("model: " + modelValue);
  }

  if(emailValue === '') {
      setError(email, 'Email is required');
      console.log("email: " + emailValue);
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
      console.log("email: " + emailValue);
  } else {
      setSuccess(email);
      console.log("email: " + emailValue);
  }

  if(phoneValue === '') {
      setError(phone, 'Phonenumber is required');
      console.log("phone: " + phoneValue);
  } else if (phoneValue.length !== 10) {
      setError(phone, 'Please enter valid phonenumber');
      console.log("phone: " + phoneValue);
  } else if (isNaN(phoneValue)) {
      setError(phone, 'Please enter valid phonenumber');
      console.log("phone: " + phoneValue);
  } else {
      setSuccess(phone);
      console.log("phone: " + phoneValue);
  }

  if(subjectValue === '-- Select Subject --') {
    setError(subject, 'Subject is required');
    console.log("subject: " + subjectValue);
  } else {
    setSuccess(subject);
    console.log("subject: " + subjectValue);
  }

  if(messageValue === '') {
      setError(messageInput, 'Message is required');
      console.log("messageInput: " + messageValue);
  } else {
      setSuccess(messageInput);
      console.log("messageInput: " + messageValue);
  }

  if(document.getElementById("text").checked) {
    console.log("myCheckbox: " + myCheckbox);
    valid = true;
  } else if (document.getElementById("call").checked) {
    console.log("myCheckbox: " + myCheckbox);
    valid = true;
  } else if (document.getElementById("voiceMail").checked) {
    console.log("myCheckbox: " + myCheckbox);
    valid = true;
  } else if (document.getElementById("emailMessage").checked) {
    console.log("myCheckbox: " + myCheckbox);
    valid = true;
  } else if (document.getElementById("any").checked) {
    console.log("myCheckbox: " + myCheckbox);
    valid = true;
  } 

  if (valid === true) {
    setSuccess(myCheckbox);
    console.log("myCheckbox: " + myCheckbox);
  } else {
    setError(myCheckbox, 'Please select at least one option');
    console.log("myCheckbox: " + myCheckbox);
  }
};