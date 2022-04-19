'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  // get form controls to check for validity
  const fname = $('#fname');
  const lname = $('#lname');
  const email = $('#email_address');
  const phone = $('#phone');
  const recipename = $('#recipename');
  const description = $('#description');
  const terms = $('#terms');

  // check user entries for validity
  let isValid = true;
  if (fname.value == '') {
    fname.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    fname.nextElementSibling.textContent = '';
  }

    if (lname.value == '') {
      lname.nextElementSibling.textContent = 'This field is required.';
      isValid = false;
    } else {
      lname.nextElementSibling.textContent = '';
     }

  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    email.nextElementSibling.textContent = '';
  }

  if (phone.value == '') {
    phone.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    phone.nextElementSibling.textContent = '';
  }

  if (recipename.value == '') {
    recipename.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    recipename.nextElementSibling.textContent = '';
  }

  if (description.value == '') {
    description.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    description.nextElementSibling.textContent = '';
  }
  

  if (terms.checked == false) {
    terms.nextElementSibling.textContent = 'This box must be checked.';
    isValid = false;
  } else {
    terms.nextElementSibling.textContent = '';
  }

  // submit the form if all fields are valid
  if (isValid == true) {
    $('form').submit();
  }
};

const resetForm = () => {
  $('form').reset();
  $('#fname').nextElementSibling.textContent = '*';
  $('#lname').nextElementSibling.textContent = '*';
  $('#email_address').nextElementSibling.textContent = '*';
  $('#phone').nextElementSibling.textContent = '*';
  $('#recipename').nextElementSibling.textContent = '*';
  $('#description').nextElementSibling.textContent = '*';
  $('#terms').nextElementSibling.textContent = '*';
  
};

document.addEventListener('DOMContentLoaded', () => {
  $('#enter').addEventListener('click', processEntries);
  $('#reset_form').addEventListener('click', resetForm);
  
});