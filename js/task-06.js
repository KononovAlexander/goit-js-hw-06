function checkEnter() {
    const input = document.querySelector('#validation-input');
    const length = parseInt(input.getAttribute('data-length'));
    console.log('length: ', length);
    input.addEventListener('blur', () => { 
        if (input.value) { 
            input.classList.remove('valid') || input.classList.remove('invalid');
            input.value.length === length ? input.classList.add('valid') : input.classList.add('invalid'); 
        } else {
            input.classList.remove('valid') || input.classList.remove('invalid');
        }
    });

 }
checkEnter();