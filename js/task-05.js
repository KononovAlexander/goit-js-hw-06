function helloAnonymous() {
    const nameOutput = document.querySelector('#name-output');
    const nameInput = document.querySelector('#name-input');
    nameInput.addEventListener('input', () => {
        nameOutput.textContent = nameInput.value; 
        
        nameInput.value === '' ? nameOutput.textContent = 'Anonymous' :
        nameOutput.textContent = nameInput.value;
   

    });
}
helloAnonymous();