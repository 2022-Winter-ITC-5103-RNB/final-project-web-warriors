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
        'Please enter first name with letter also';
    } else {
      Uname.nextElementSibling.innerHTML = '';
    }

    let Pass = document.querySelector('#Pass');
    let Passpattern = /^[a-zA-Z]{3,30}$/;
 
    if (Pass.value == '') {
      Pass.nextElementSibling.innerHTML = 'Please enter valid Password';
    } else if (!passpattern.test(Pass.value)) {
      Pass.nextElementSibling.innerHTML =
        'Please enter Password with letter only';
    } else {
      Pass.nextElementSibling.innerHTML = '';
    }


    Login();
  }

  function Login()
{

  
 var a = new Array();
 up1 = new Object();
 
 
  up1={name:document.getElementById('Uname').value,password:btoa(document.getElementById('Pass').value)};

a.push(up1);

localStorage.setItem('all_users',JSON.stringify(a));
}



