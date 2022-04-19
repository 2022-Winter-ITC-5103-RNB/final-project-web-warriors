window.onload = function () {
    document.getElementById('submit').onclick = validateFrom;
  };
 
  function validateFrom() {
   

    let email = document.querySelector('#email');
    let namepattern = /^[a-zA-Z]{3,30}$/;
 
    if (email.value == '') {
      email.nextElementSibling.innerHTML = 'Fill out this feild';
    } else if (!namepattern.test(email.value)) {
      email.nextElementSibling.innerHTML =
        'fill out this field';
    } else {
      email.nextElementSibling.innerHTML = '';
    }
  }
