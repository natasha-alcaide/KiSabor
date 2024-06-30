function validarPerfil() {
    let valido = true;

    var userNameInput = document.getElementById('user-name').value;
    var userNameValidate = document.getElementById('validate-form-user-name');
    if (userNameInput === '') {
        userNameValidate.style.display = 'block';
        valido = false;
    } else {
        userNameValidate.style.display = 'none';
    }

    var userEmailInput = document.getElementById('user-email').value;
    var userEmailValidate = document.getElementById('validate-form-user-email');
    if (userEmailInput === '') {
        userEmailValidate.style.display = 'block';
        valido = false;
    } else {
        userEmailValidate.style.display = 'none';
    }

    var userDescriptionInput = document.getElementById('user-description').value;
    var userDescriptionValidate = document.getElementById('validate-form-user-description');
    if (userDescriptionInput === '') {
        userDescriptionValidate.style.display = 'block';
        valido = false;
    } else {
        userDescriptionValidate.style.display = 'none';
    }

    return valido;
}
