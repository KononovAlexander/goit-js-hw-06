function helloAnonymous() {
    const nameOutput = document.querySelector('#name-output');
    const nameInput = document.querySelector('#name-input');
    nameInput.addEventListener('input', () => {

        nameInput.value === true ? nameOutput.textContent = nameOutput.textContent :
        nameOutput.textContent = nameInput.value; 
    });
}
helloAnonymous();