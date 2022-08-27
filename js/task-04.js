"use strict"
function counter() {
    const counter = document.querySelector('#counter');
    
    const value = document.querySelector('#value');
    let counterValue = 0;
    counter.addEventListener('click', (event) => { 
        let target = event.target;
        if (target.getAttribute('data-action') === "decrement") {
            counterValue -= 1;      
            value.textContent = counterValue;
        } else if (target.getAttribute('data-action') === "increment") {
             counterValue += 1;
             value.textContent = counterValue;
        }    
    });
}
counter();