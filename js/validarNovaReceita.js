function validarNovaReceita() {
    let valido = true;

    var titleInput = document.getElementById('recipe-title').value;
    var titleValidate = document.getElementById('validate-form-title');
    if (titleInput === '') {
        titleValidate.style.display = 'block';
        valido = false;
    } else {
        titleValidate.style.display = 'none';
    }

    var fileUploadInput = document.getElementById('file-upload').value;
    var fileUploadValidate = document.getElementById('validate-form-file-upload');
    if (fileUploadInput === '') {
        fileUploadValidate.style.display = 'block';
        valido = false;
    } else {
        fileUploadValidate.style.display = 'none';
    }

    var servingsInput = document.getElementById('recipe-servings').value;
    var servingsValidate = document.getElementById('validate-form-servings');
    if (servingsInput === '') {
        servingsValidate.style.display = 'block';
        valido = false;
    } else {
        servingsValidate.style.display = 'none';
    }

    var costInput = document.getElementById('cost').value;
    var costValidate = document.getElementById('validate-form-cost');
    if (costInput === '') {
        costValidate.style.display = 'block';
        valido = false;
    } else {
        costValidate.style.display = 'none';
    }

    var prepTimeHoursInput = document.getElementById('prep-time-hours').value;
    var prepTimeMinutesInput = document.getElementById('prep-time-minutes').value;
    var prepTimeValidate = document.getElementById('validate-form-prep-time');
    if (prepTimeHoursInput === '' && prepTimeMinutesInput === '') {
        prepTimeValidate.style.display = 'block';
        valido = false;
    } else {
        prepTimeValidate.style.display = 'none';
    }

    var cookTimeHoursInput = document.getElementById('cook-time-hours').value;
    var cookTimeMinutesInput = document.getElementById('cook-time-minutes').value;
    var cookTimeValidate = document.getElementById('validate-form-cook-time');
    if (cookTimeHoursInput === '' && cookTimeMinutesInput === '') {
        cookTimeValidate.style.display = 'block';
        valido = false;
    } else {
        cookTimeValidate.style.display = 'none';
    }

    var difficultyInput = document.getElementById('difficulty').value;
    var difficultyValidate = document.getElementById('validate-form-difficulty');
    if (difficultyInput === '') {
        difficultyValidate.style.display = 'block';
        valido = false;
    } else {
        difficultyValidate.style.display = 'none';
    }

    var descriptionInput = document.getElementById('recipe-description').value;
    var descriptionValidate = document.getElementById('validate-form-description');
    if (descriptionInput === '') {
        descriptionValidate.style.display = 'block';
        valido = false;
    } else {
        descriptionValidate.style.display = 'none';
    }

    var ingredientsInput = document.getElementById('recipe-ingredients').value;
    var ingredientsValidate = document.getElementById('validate-form-ingredients');
    if (ingredientsInput === '') {
        ingredientsValidate.style.display = 'block';
        valido = false;
    } else {
        ingredientsValidate.style.display = 'none';
    }

    var preparationInput = document.getElementById('recipe-preparation').value;
    var preparationValidate = document.getElementById('validate-form-preparation');
    if (preparationInput === '') {
        preparationValidate.style.display = 'block';
        valido = false;
    } else {
        preparationValidate.style.display = 'none';
    }

    return valido;
}
