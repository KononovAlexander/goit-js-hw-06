function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  const body = document.querySelector('body');
  const btn = document.querySelector('button.change-color');
  const color = document.querySelector('span.color');
  
  btn.addEventListener('click', () => { 
    body.style.backgroundColor = getRandomHexColor();
    color.textContent = getRandomHexColor();
  });
}
changeColor();