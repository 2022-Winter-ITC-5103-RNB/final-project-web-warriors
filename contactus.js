const $ = selector => document.querySelector(selector); 
 
const processEntries = () => {
    const name = $("#name");
    const email = $("#email");
    const phone = $("#phone");
    const subject = $("#subject");
    const message = $("#message");
 
    let isValid = true;
    
    if (email.value == "") {
        email.nextElementSibling.textContent =
            "Fill out this field";
        isValid = false; 
    } else { 
        email.nextElementSibling.textContent = "";
    }

    if (phone.value == "") {
        phone.nextElementSibling.textContent =
            "Fill out this field";
        isValid = false; 
    } else { 
        phone.nextElementSibling.textContent = "";
    }

    if (subject.value == "") {
        subject.nextElementSibling.textContent =
            "Fill out this field";
        isValid = false; 
    } else { 
        subject.nextElementSibling.textContent = "";
    }

    if (isValid == true) {
        $("form").submit(); 
    }
}

const resetForm = () => {
    $("form").reset();
    $("#name").nextElementSibling.textContent = "*";
    $("#email").nextElementSibling.textContent = "*";
    $("#phone").nextElementSibling.textContent = "*";
    $("#subject").nextElementSibling.textContent = "*";	
    $("#message").nextElementSibling.textContent = "*";
    $("#email").focus();
};
 
document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#email_address").focus();   
});

