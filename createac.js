window.onload = function () {
    document.getElementById('log').onclick = validateFrom;
  };
 
  function validateFrom() {
    // alert('in the form');
    let email = document.querySelector('#email');     //username validation
    let emailpattern = /^[a-zA-Z]{3,30}$/;
 
    if (email.value == '') {
      email.nextElementSibling.innerHTML = 'Please enter your email';
    } else if (!namepattern.test(email.value)) {
      email.nextElementSibling.innerHTML =
        'Please enter first name with letter only';
    } else {
      email.nextElementSibling.innerHTML = '';
    }

    let Uname = document.querySelector('#Uname');     //username validation
    let namepattern = /^[a-zA-Z]{3,30}$/;
 
    if (Uname.value == '') {
      Uname.nextElementSibling.innerHTML = 'Please enter user name';
    } else if (!namepattern.test(Uname.value)) {
      Uname.nextElementSibling.innerHTML =
        'Please enter first name with letter only';
    } else {
      Uname.nextElementSibling.innerHTML = '';
    }

    let Pass = document.querySelector('#Pass');     //password validation
    let Passpattern = /^[a-zA-Z]{3,30}$/;
 
    if (Pass.value == '') {
      Pass.nextElementSibling.innerHTML = 'Please enter Password';
    } else if (!namepattern.test(Pass.value)) {
      Pass.nextElementSibling.innerHTML =
        'Please enter Password with letter only';
    } else {
      Pass.nextElementSibling.innerHTML = '';
    }
  }