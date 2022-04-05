window.onload = function () {
    document.getElementById('log').onclick = validateFrom;
  };
 
  function validateFrom() {
    // alert('in the form');
    let Uname = document.querySelector('#Uname');
    let namepattern = /^[a-zA-Z]{3,30}$/;
 
    if (Uname.value == '') {
      Uname.nextElementSibling.innerHTML = 'Please enter user name';
    } else if (!namepattern.test(Uname.value)) {
      Uname.nextElementSibling.innerHTML =
        'Please enter first name with letter only';
    } else {
      Uname.nextElementSibling.innerHTML = '';
    }

    let Pass = document.querySelector('#Pass');
    let Passpattern = /^[a-zA-Z]{3,30}$/;
 
    if (Pass.value == '') {
      Pass.nextElementSibling.innerHTML = 'Please enter valid Password';
    } else if (!namepattern.test(Pass.value)) {
      Pass.nextElementSibling.innerHTML =
        'Please enter Password with letter only';
    } else {
      Pass.nextElementSibling.innerHTML = '';
    }
  }