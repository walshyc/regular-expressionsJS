// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('eircode').addEventListener('blur', validateEircode)
document.getElementById('phone').addEventListener('blur', validatePhone)

function validateName() {
    const name = document.getElementById('name')
    const re = /^[a-zA-Z]{2,20}?[-. ][a-zA-Z]{2,20}$/

    if (!re.test(name.value)) {
        name.classList.add('is-invalid')
    } else {
        name.classList.remove('is-invalid')
    }
}

function validateEmail() {
    const email = document.getElementById('email')
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,63})$/

    if (!re.test(email.value)) {
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
    }
}

function validateEircode() {
    const eircode = document.getElementById('eircode')
    const pattern =
        '\\b(?:(' +
        'a(4[125s]|6[37]|7[5s]|[8b][1-6s]|9[12468b])|' +
        'c1[5s]|' +
        'd([0o][1-9sb]|1[0-8osb]|2[024o]|6w)|' +
        'e(2[15s]|3[24]|4[15s]|[5s]3|91)|' +
        'f(12|2[368b]|3[15s]|4[25s]|[5s][26]|9[1-4])|' +
        'h(1[2468b]|23|[5s][34]|6[25s]|[79]1)|' +
        'k(3[246]|4[5s]|[5s]6|67|7[8b])|' +
        'n(3[79]|[49]1)|' +
        'p(1[247]|2[45s]|3[126]|4[37]|[5s][16]|6[17]|7[25s]|[8b][15s])|' +
        'r(14|21|3[25s]|4[25s]|[5s][16]|9[35s])|' +
        't(12|23|34|4[5s]|[5s]6)|' +
        'v(1[45s]|23|3[15s]|42|9[2-5s])|' +
        'w(12|23|34|91)|' +
        'x(3[5s]|42|91)|' +
        'y(14|2[15s]|3[45s])' +
        ')\\s?[abcdefhknoprtsvwxy\\d]{4})\\b';

    const re = new RegExp(pattern, 'i');

    if (!re.test(eircode.value)) {
        eircode.classList.add('is-invalid')
    } else {
        eircode.classList.remove('is-invalid')
    }
}

function validatePhone() {
    const phone = document.getElementById('phone')
    const re = /^\(?\d{3}\)?[-. ]?\d{7}$/

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid')
    } else {
        phone.classList.remove('is-invalid')
    }
}