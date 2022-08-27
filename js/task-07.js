function fSizeToggler() {
    const fSizeControl = document.querySelector('#font-size-control');
    const text = document.querySelector('#text');
    
    fSizeControl.addEventListener('input', () => { 
        text.style.fontSize = `${fSizeControl.value}px`;         
    });
 }
fSizeToggler();