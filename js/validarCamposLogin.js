function validarLogin() {
    let valido = true;

    var emailInput = document.getElementById('email').value;
    var emailValidate = document.getElementById('validate-form-email');

    if (emailInput === '') {
        emailValidate.style.display = 'block';
        valido = false;
    } else {
        emailValidate.style.display = 'none';
    }   


    var senhalInput = document.getElementById('senha').value;
    var senhaValidate = document.getElementById('validate-form-senha');

    if (senhalInput === '') {
        senhaValidate.style.display = 'block';
        valido = false;
    } else {
        senhaValidate.style.display = 'none';
    }   

    return valido;
}

