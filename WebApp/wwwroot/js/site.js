function footerPosition(element, scrollHeight, innerHeight) {
    try {
        const _element = document.querySelector('.footer')
        const isTallerThanScreen = scrollHeight >= (innerHeight + _element.scrollHeight)

        _element.classList.toggle('position-fixed-bottom', !isTallerThanScreen)
        _element.classList.toggle('position-static', isTallerThanScreen)
    } catch { }

}
footerPosition('.footer', document.body.scrollHeight, window.innerHeight);

function toggleMenu(value) {
    try {
        const toggleBtn = document.querySelector(value)
        toggleBtn.addEventListener('click', function () {
            const element = document.querySelector(toggleBtn.getAttribute('data-target'))

            if (!element.classList.contains('open-menu')) {
                element.classList.add('open-menu')
                toggleBtn.classList.add('btn-outline-dark')
                toggleBtn.classList.add('btn-toggle-white')
            }

            else {
                element.classList.remove('open-menu')
                toggleBtn.classList.remove('btn-outline-dark')
                toggleBtn.classList.remove('btn-toggle-white')
            }
        })
    } catch { }

}


toggleMenu('[data-option="toggle"]');


//Validation of forms:





function completeNameValidationRequired(e) {

    console.log(e.target.dataset.valRequired)
    const regex = /^(?![\s-]+$)[a-öA-Ö\s-]*$/;
    validationfield = document.querySelector(`[data-valmsg-for="${e.target.id}"]`)
    console.log(validationfield)

    if (regex.test(e.target.value) && e.target.value.length >=2) {
        validationfield.classList.add('text-success')
        validationfield.classList.remove('text-danger')
        validationfield.innerText = "It's valid"
    }
    else {
        validationfield.classList.remove('text-success')
        validationfield.classList.add('text-danger')
        validationfield.innerText = `You must provide a valid name: ${e.target.dataset.valRequired}`
    }
}


function emailValidationRequired(e) {
    console.log(e.target.dataset.valRequired)
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    validationfield = document.querySelector(`[data-valmsg-for="${e.target.id}"]`)
    console.log(validationfield)

    if (regex.test(e.target.value)) {
        validationfield.classList.add('text-success')
        validationfield.classList.remove('text-danger')
        validationfield.innerText = "It's a valid email address"
    }
    else {
        validationfield.classList.remove('text-success')
        validationfield.classList.add('text-danger')
        validationfield.innerText = `Email address not valid: ${e.target.dataset.valRequired}`
    }
}

function postalCodeValidation(e) {
    const regex = /^[0-9]{5}$/;

    validationfield = document.querySelector(`[data-valmsg-for="${e.target.id}"]`)
    console.log(validationfield)

    if (regex.test(e.target.value) && e.target.value.length >= 5) {
        validationfield.classList.add('text-success')
        validationfield.classList.remove('text-danger')
        validationfield.innerText = "It's valid"
    }
    else {
        validationfield.classList.remove('text-success')
        validationfield.classList.add('text-danger')
        validationfield.innerText = `Postal code is not valid: ${e.target.dataset.valRequired}`
    }
}


function streetNameValidation(e) {
    const regex = /^[a-zA-Z\u0080-\u024F0-9\s\,\.'\-]+$/;

    validationfield = document.querySelector(`[data-valmsg-for="${e.target.id}"]`)
    console.log(validationfield)

    if (regex.test(e.target.value) && e.target.value.length >= 8) {
        validationfield.classList.add('text-success')
        validationfield.classList.remove('text-danger')
        validationfield.innerText = "It's valid"
    }
    else {
        validationfield.classList.remove('text-success')
        validationfield.classList.add('text-danger')
        validationfield.innerText = `You must provide a valid Streetname: ${e.target.dataset.valRequired}`
    }
}




function firstAndLastNameValidation(e) {
    const regex = /^(?![\s-]+$)[a-öA-Ö\s-]*$/;

    validationfield = document.querySelector(`[data-valmsg-for="${e.target.id}"]`)
    console.log(validationfield)

    if (regex.test(e.target.value) && e.target.value.length >= 2) {
        validationfield.classList.add('text-success')
        validationfield.classList.remove('text-danger')
        validationfield.innerText = "It's valid"
    }
    else {
        validationfield.classList.remove('text-success')
        validationfield.classList.add('text-danger')
        validationfield.innerText = `You must provide a valid name: ${e.target.dataset.valRequired}`
    }
}

function passwordValidation(e) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
    validationfield = document.querySelector(`[data-valmsg-for="${e.target.id}"]`)
    console.log(validationfield)

    if (regex.test(e.target.value) && e.target.value.length >= 8) {
        validationfield.classList.add('text-success')
        validationfield.classList.remove('text-danger')
        validationfield.innerText = "Password is valid"
    }
    else {
        validationfield.classList.remove('text-success')
        validationfield.classList.add('text-danger')
        validationfield.innerText = `Password not valid: ${e.target.dataset.valRequired}`
    }
}

function comparePasswords(e) {
    validationfield = document.querySelector(`[data-valmsg-for="${e.target.id}"]`)
    const insertedPassword = document.getElementById("Password").value;
    const confirmPassword = e.target.value;

    if (insertedPassword === confirmPassword) {
        validationfield.classList.add('text-success')
        validationfield.classList.remove('text-danger')
        validationfield.innerText = "Passwords matching"
    }
    else {
        validationfield.classList.remove('text-success')
        validationfield.classList.add('text-danger')
        validationfield.innerText = `Passwords do not match`
    }
}


function numberOfCharacters(maxNumberCharacters) {

    const messageInput = document.querySelector('.textarea');
    const validationfield = document.getElementById("errormessage")
    const _maxNumberCharacters = maxNumberCharacters;
    const insertedNumberofCharacters = _maxNumberCharacters - messageInput.value.length;

    if (messageInput.value.length > 0 && messageInput.value.length <= _maxNumberCharacters) {
        validationfield.classList.remove("text-danger");
        validationfield.classList.add("text-success");
        validationfield.innerText = `Characters left ${insertedNumberofCharacters} `; 
           
      }
    else if (messageInput.value.length > _maxNumberCharacters) {
        validationfield.classList.remove("text-success");
        validationfield.classList.add("text-danger");
        validationfield.innerText = `Your message must be ${_maxNumberCharacters} character or less (${messageInput.value.length})`;
        }
}