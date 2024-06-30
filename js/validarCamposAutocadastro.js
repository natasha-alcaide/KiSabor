function validarCadastro() {
    let valido = true;

    var nomeInput = document.getElementById('nome').value;
    var nomeValidate = document.getElementById('validate-form-nome');

    if (nomeInput === '') {
        nomeValidate.style.display = 'block';
        valido = false;
    } else {
        nomeValidate.style.display = 'none';
    }

    var emailInput = document.getElementById('email').value;
    var emailValidate = document.getElementById('validate-form-email');

    if (emailInput === '') {
        emailValidate.style.display = 'block';
        valido = false;
    } else {
        emailValidate.style.display = 'none';
    }

    var senhaInput = document.getElementById('senha').value;
    var senhaValidate = document.getElementById('validate-form-senha');

    if (senhaInput === '') {
        senhaValidate.style.display = 'block';
        valido = false;
    } else {
        senhaValidate.style.display = 'none';
    }

    var confirmaSenhaInput = document.getElementById('confirma-senha').value;
    var confirmaSenhaValidate = document.getElementById('validate-form-confirma-senha');

    if (confirmaSenhaInput === '') {
        confirmaSenhaValidate.style.display = 'block';
        valido = false;
    } else if (confirmaSenhaInput !== senhaInput) {
        confirmaSenhaValidate.innerHTML = '<p><i class="bi bi-exclamation-diamond"></i> As senhas não coincidem</p>';
        confirmaSenhaValidate.style.display = 'block';
        valido = false;
    } else {
        confirmaSenhaValidate.style.display = 'none';
    }


    var confirmaSenhaInput = document.getElementById('confirma-senha').value;
    var confirmaSenhaValidate = document.getElementById('validate-form-confirma-senha');

    if (confirmaSenhaInput === '') {
        confirmaSenhaValidate.style.display = 'block';
        confirmaSenhaValidate.innerHTML = '<p><i class="bi bi-exclamation-diamond"></i> Por favor, preencha a confirmação de senha</p>';
        valido = false;
    } else if (confirmaSenhaInput !== senhaInput) {
        confirmaSenhaValidate.style.display = 'block';
        confirmaSenhaValidate.innerHTML = '<p><i class="bi bi-exclamation-diamond"></i> As senhas não coincidem</p>';
        valido = false;
    } else {
        confirmaSenhaValidate.style.display = 'none';
    }

    return valido;
}
